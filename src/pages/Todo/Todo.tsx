import React, {useState, useCallback} from 'react';
import { AddButton, Background, BtnTitle, EditButton, FormContainer, Label, ModalBackground, Task, TaskContainer, TopBar } from './styles';
import { useForm } from "react-hook-form";
import { TextField } from './styles';
import { ControlledInput } from '../../components/ControlledInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { Modal, Portal } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';
import TodoList from './TodoList';


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
                return [...prevState, { task, done }];
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
            
    const onSubmit = (data) => {
        newElement(data.task);
        reset({ task: '' });
    };

    const onSubmitUpdate = data => {
        let itemToUpdate = { ...list[indexToEdit] };
        itemToUpdate.task = data.task;
        updateList({ index: indexToEdit, itemToUpdate });
        handleEdit(-1);
    }

    const handleEdit = useCallback((index: number) => {
        setVisible(prevState => !prevState);
        setIndexToEdit(index);
        setValue('task', list[index]?.task ?? '', { shouldValidate: false });
        if (index === -1) {
            reset({ task: '' });
        }
    }, [list]);

    const [visible, setVisible] = useState<boolean>(false);
    const [indexToEdit, setIndexToEdit] = useState(-1);
    
    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <Background>
            <TopBar>
                    <Task>Nºde tarefas: {list.length}</Task>
                    <Task>Tarefas concluidas: {(list??[]).filter(item => item.done).length}</Task>
            </TopBar>
            <Portal>
                <Modal visible={visible} onDismiss={() => handleEdit(-1)}>
                    <ModalBackground>
                        <Label>Editar Tarefa</Label>
                        <FormContainer>
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
                        </FormContainer>

                    </ModalBackground>
                </Modal>
            </Portal>

            <View style={{backgroundColor: '#fff'}}>
                <Label>Adicionar nova tarefa</Label>
                <FormContainer>
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
                </FormContainer>
            </View>
            
            <TodoList list={list} toggleCheckBox={toggleCheckBox} removeElement={removeElement} handleEdit={handleEdit} />

            </Background>
            </TouchableWithoutFeedback>
    );
}

export default Todo;