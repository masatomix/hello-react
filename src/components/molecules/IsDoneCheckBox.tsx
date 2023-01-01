import { Dispatch, FC, SetStateAction } from 'react';
import { Checkbox } from '@chakra-ui/react';
import { css } from '@emotion/css';
import type { Todo } from 'data';


type Props = {
    setTodos: Dispatch<SetStateAction<Todo[]>>
    target: Todo
};

const IsDoneCheckBox: FC<Props> = ({
    setTodos,
    target,
}) => {

    const handleCheckbox = (target: Todo) => {
        setTodos(todos =>
            // targetとおなじkeyのヤツは該当のヤツなので、isDoneをtoggleする
            todos.map(todo =>
                todo.key === target.key ?
                    { ...todo, isDone: !todo.isDone }
                    : todo)
        )
    }

    return <Checkbox name="isDone" isChecked={target.isDone}
        onChange={() => handleCheckbox(target)}
        className={css`margin-right: 5px;margin-top: 5px;`} />
}



export default IsDoneCheckBox;
