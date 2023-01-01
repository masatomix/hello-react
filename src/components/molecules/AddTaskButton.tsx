import type { Dispatch, FC, SetStateAction, SyntheticEvent } from 'react';
import { Button } from '@chakra-ui/react';
import type { Todo } from 'data';


const getKey: () => string = () => Math.random().toString(32).substring(2);

type Props = {
    formData: Todo
    setFormData: Dispatch<SetStateAction<Todo>>
    setTodos: Dispatch<SetStateAction<Todo[]>>
};

const AddTaskButton: FC<Props> = ({
    formData,
    setFormData,
    setTodos
}) => {
    const addTask = (event: SyntheticEvent) => {
        event.stopPropagation();
        const data = { ...formData, key: getKey() }
        setTodos(todos => [...todos, data])
        setFormData(formData => ({ ...formData, name: '' })) // テキストボックスを空に。
    }

    return <Button colorScheme='blue' onClick={addTask}>追加</Button>
}



export default AddTaskButton;
