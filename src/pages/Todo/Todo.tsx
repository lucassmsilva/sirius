import React, {useState, useEffect, useCallback} from 'react';
import TodoList from '../../components/TodoList/TodoList';
import { AddButton, Background, BtnTitle, Task, TaskContainer } from './styles';
import { useForm } from "react-hook-form";
import { TextField } from './styles';
import { ControlledInput } from '../../components/ControlledInput';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TodoItem from './TodoItem';


export const Todo = () => {

    const schema = yup.object({
        task: yup.string().min(10, 'Minímo de 10 caracteres').required('Obrigatório'),
    }).required();


    const { control, handleSubmit, formState: { errors } } = useForm<any>({
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
    

    return (
        <Background>
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
                <TodoItem key={item.id} item={item} index={index} toggleCheckBox={toggleCheckBox} removeElement={removeElement}/>

            ))}

        </Background>
    );
}

export default Todo;