import { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react';
import { css } from '@emotion/react';
import type { Todo } from 'data';

type Props = {
    todos: Todo[]
    setTodos: Dispatch<SetStateAction<Todo[]>>
    index: number
};

const style = css`
cursor: pointer;
fontSize: 12px;
color: red;
`

const RemoveTaskButton: FC<PropsWithChildren<Props>> = ({
    todos,
    setTodos,
    index,
    children = '[x]'
}) => {

    const removeTask = (index: number) => {
        todos.splice(index, 1)
        setTodos(_ => [...todos])
    }

    return <span onClick={() => removeTask(index)} css={style}>{children}</span>
}



export default RemoveTaskButton;
