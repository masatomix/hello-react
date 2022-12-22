import { Dispatch, FC, SetStateAction, } from 'react';
import { Button } from '@chakra-ui/react';
import { css } from '@emotion/css';
import type { Todo } from 'data';

type Props = {
    setTodos: Dispatch<SetStateAction<Todo[]>>
    colorScheme?: string
    className?: string
};

// const defClassName = css``

const DeleteEndTaskButton: FC<Props> = ({ setTodos, colorScheme = 'blue', className }) => {

    const deleteEndTask = () => {
        setTodos(todos => {
            const newTodos = todos.filter(todo => !todo.isDone)
            localStorage.setItem('todos', JSON.stringify(newTodos))

            return newTodos
        })
    }

    return <Button colorScheme={colorScheme} className={className} onClick={() => deleteEndTask()}>完了タスクの削除</Button>

}



export default DeleteEndTaskButton;
