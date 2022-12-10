import { Dispatch, FC, SetStateAction } from 'react';
import { Checkbox } from '@chakra-ui/react';
import type { Todo } from 'data';

type Props = {
    todos: Todo[]
    setTodos: Dispatch<SetStateAction<Todo[]>>
    isChecked: boolean,
    index: number
};

const IsDoneCheckBox: FC<Props> = ({
    todos,
    setTodos,
    isChecked,
    index,
}) => {

    const handleCheckbox = (targetIndex: number) => {
        setTodos(_ => todos.map((todo, index) =>
            index === targetIndex ?
                { ...todo, isDone: !todo.isDone }
                : todo
        ))
    }

    return <Checkbox name="isDone" isChecked={isChecked} onChange={() => handleCheckbox(index)} />
}



export default IsDoneCheckBox;
