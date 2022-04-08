import React, {useState, useEffect, useCallback} from 'react';
import { AddButton, Background, BtnTitle, EditButton, Task, TaskContainer } from './styles';
import { useForm } from "react-hook-form";
import { TextField } from './styles';
import { ControlledInput } from '../../components/ControlledInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TodoItem from './TodoItem';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';


export const Todo = () => {

    const schema = yup.object({
        task: yup.string().min(10, 'Minímo de 10 caracteres').required('Obrigatório'),
    }).required();


    const { control, handleSubmit, reset, setValue, formState: { errors } } = useForm<any>({
        defaultValues: {
          task: '',
        },
        resolver: yupResolver(schema)
    });


    type TodoProps = {
        id: number;
        task: string;
        done: boolean;
    };

    type UpdateListProps = {
        index: number;
        itemToUpdate: TodoProps;
    };

    const [list, setList] = useState<Array<TodoProps>>([]);
    const [counter, setCounter] = useState<number>(0);
    
    const addElement = useCallback(({ task, done }) => {
        setList(prevState => {
                let id = prevState.length + 1;
                return [...prevState, { id, task, done }];
            });
        }, [])

    const removeElement = useCallback((index: number) => {
            setList(prevState => {
                let rmv = prevState.splice(index, 1);
                return [...prevState];
            })
        }, [list]);

    const updateList = 
        useCallback(({index, itemToUpdate }: UpdateListProps) => {
            setList(prevState => {
                let rmv = prevState.splice(index, 1, itemToUpdate);
                console.log(prevState, rmv)
                return [...prevState];
            })
        }, [list])

    const toggleCheckBox = 
        useCallback((index: number) => {

        let itemToUpdate = { ...list[index] };
        itemToUpdate.done = !itemToUpdate.done;
            return updateList({ index, itemToUpdate });
        }, [list])

    const newElement = useCallback((task: string) => {
            return addElement({task: task, done: false })
        }, [])
            
    const onSubmit = data => newElement(data.task);
    const onSubmitUpdate = data => {
        let itemToUpdate = { ...list[indexToEdit] };
        itemToUpdate.task = data.task;
        updateList({ index: indexToEdit, itemToUpdate });
        handleEdit(-1);
    }


    const [visible, setVisible] = useState<boolean>(false);
    const [indexToEdit, setIndexToEdit] = useState(-1);

    const handleEdit = (index) => {
        setVisible(prevState => !prevState);
        setIndexToEdit(index);
        setValue('task', list[index]?.task ?? '', { shouldValidate: false });
        if (index === -1) {
            reset({ task: '' });
        }
    }
    

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>

            <Background>
            <Portal>
                <Modal visible={visible} onDismiss={() => handleEdit(-1)}>
                    <TaskContainer>
                        <Task>Tarefa: {list[indexToEdit]?.id??''}</Task>
                    </TaskContainer>
                    <TaskContainer>
                        <TextField>
                            <ControlledInput
                                control={control}
                                label="Tarefa"
                                type="text"
                                name="task"
                                required={false}
                            />
                        </TextField>
                        <EditButton onPress={handleSubmit(onSubmitUpdate)}><Icon name="edit" color="#fff" size={20}></Icon></EditButton>
                    </TaskContainer>
                </Modal>
            </Portal>
            <TaskContainer>
                <Task>Nºde tarefas: {list.length} - Tarefas concluidas: {(list??[]).filter(item => item.done).length}</Task>
            </TaskContainer>
            <TaskContainer>
                <TextField>
                    <ControlledInput
                        control={control}
                        label="Tarefa"
                        type="text"
                        name="task"
                        required={false}
                    />
                </TextField>
                <AddButton onPress={handleSubmit(onSubmit)}><BtnTitle>+</BtnTitle></AddButton>
            </TaskContainer>
            {(list ?? []).map((item, index) => (
                <TodoItem key={item.id} item={item} index={index} toggleCheckBox={toggleCheckBox} removeElement={removeElement} handleEdit={handleEdit} />
            ))}

            </Background>
            </TouchableWithoutFeedback>
    );
}

export default Todo;