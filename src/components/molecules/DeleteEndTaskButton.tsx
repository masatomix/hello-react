import { Dispatch, FC, SetStateAction, } from 'react';
import { Button } from '@chakra-ui/react';
import { css } from '@emotion/react';
import type { Todo } from 'data';

type Props = {
    setTodos: Dispatch<SetStateAction<Todo[]>>
};

const DeleteEndTaskButton: FC<Props> = ({ setTodos }) => {

    const deleteEndTask = () => {
        setTodos(todos => {
            const newTodos = todos.filter(todo => !todo.isDone)
            localStorage.setItem('todos', JSON.stringify(newTodos))

            return newTodos
        })
    }

    return <Button css={css`float: right;`} onClick={() => deleteEndTask()}>完了タスクの削除</Button>

}



export default DeleteEndTaskButton;
