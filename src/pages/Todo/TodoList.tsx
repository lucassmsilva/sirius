import React, { memo, useState } from 'react';
import TodoItem from './TodoItem';


type TodoProps = {
    task: string;
    done: boolean;
};

type UpdateListProps = {
    index: number;
    itemToUpdate: TodoProps;
};


const TodoList = ({list, toggleCheckBox, removeElement, handleEdit}: any) => {

    return (
        <React.Fragment>
            {(list ?? []).map((item, index) => (
                <TodoItem key={index} item={item} index={index} toggleCheckBox={toggleCheckBox} removeElement={removeElement} handleEdit={handleEdit} />
            ))}
        </React.Fragment>
    )
}

export default TodoList;