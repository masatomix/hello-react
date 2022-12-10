import { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import { Button } from '@chakra-ui/react';
import { css } from '@emotion/react';
import type { Todo } from 'data';

type Props = {
    todos: Todo[]
    setTodos: Dispatch<SetStateAction<Todo[]>>
};

const DeleteEndTaskButton: FC<Props> = ({
    todos,
    setTodos
}) => {

    const [remainingTasks, setRemainingTasks] = useState<Todo[]>([]);

    useEffect(() => {
        setRemainingTasks(_ => todos.filter(prev => !prev.isDone))
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const deleteEndTask = () => {
        setTodos(_ => [...remainingTasks])
    }

    return <Button css={css`float: right;`} onClick={() => deleteEndTask()}>完了タスクの削除</Button>

}



export default DeleteEndTaskButton;
