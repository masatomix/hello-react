import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { css } from '@emotion/css';
import type { Todo } from 'data';

type Props = {
    setTodos: Dispatch<SetStateAction<Todo[]>>
    target: Todo
};

const style = css`
cursor: pointer;
fontSize: 12px;
color: red;
`

const RemoveTaskButton: FC<PropsWithChildren<Props>> = ({
    setTodos,
    target,
    children = '[x]'
}) => {

    const removeTask = (target: Todo) => {
        setTodos(todos => {
            const position = todos.findIndex(todo => todo.key === target.key)
            const newTodos = [...todos]
            newTodos.splice(position, 1)
            localStorage.setItem('todos', JSON.stringify(newTodos))

            return newTodos
        })

    }

    return <span onClick={() => removeTask(target)} className={style}>{children}</span>
}



export default RemoveTaskButton;
