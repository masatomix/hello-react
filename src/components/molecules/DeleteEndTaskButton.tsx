import { FC } from 'react';
import { Button } from '@chakra-ui/react';
import type { Todo } from 'data';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from 'firebaseConfig'

type Props = {
    todos: Todo[]
    colorScheme?: string
    className?: string
};

const DeleteEndTaskButton: FC<Props> = ({ todos, colorScheme = 'blue', className }) => {
    const deleteEndTask = () => {
        todos.filter(todo => todo.isDone).forEach(endTodo => deleteDoc(doc(db, 'todos', endTodo.key)))
    }

    return <Button colorScheme={colorScheme} className={className} onClick={() => deleteEndTask()}>完了タスクの削除</Button>
}

export default DeleteEndTaskButton;