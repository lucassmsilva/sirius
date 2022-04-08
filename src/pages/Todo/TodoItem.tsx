import CheckBox from "@react-native-community/checkbox";
import React, {memo, useCallback} from "react";
import { EditButton, RemoveButton, Task, TaskButton, TaskContainer } from "../../pages/Todo/styles";
import Icon from 'react-native-vector-icons/FontAwesome';
import { View } from "react-native";

type TodoProps = {
    id: number;
    task: string;
    done: boolean;
};

type TodoItemProps = {
    item: TodoProps,
    index: number;
    toggleCheckBox: (index: number) => void;
    removeElement: (index: number) => void;
    updateList?: (index: number, itemToUpdate: TodoProps) => void;
}

const TodoItem = ({item, index, toggleCheckBox, removeElement, updateList }: TodoItemProps) => {
    console.log('render item: ' + item.id);
     return (
         <React.Fragment>
            <TaskContainer >
                <TaskButton onPress={() => toggleCheckBox(index)}>
                    <CheckBox
                        disabled={false}
                        value={item.done}
                        onValueChange={(value) => {
                            return toggleCheckBox(index);
                        }}
                    />
                    <Task> {item.id} - {item.task}</Task>
                </TaskButton>
                <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderRadius: 4}}>
                    <EditButton><Icon name="edit" color="#fff" size={20}></Icon></EditButton>
                    <RemoveButton onPress={() => removeElement(index)}><Icon name="trash" color="#fff" size={20}></Icon></RemoveButton>
                </View>
            </TaskContainer>
         </React.Fragment>
     );
}
export default memo(TodoItem);