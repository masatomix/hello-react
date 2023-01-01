import { FC, PropsWithChildren } from 'react';
import { css } from '@emotion/css';
import type { Todo } from 'data';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from 'firebaseConfig'
import { FaRegTrashAlt } from 'react-icons/fa';

type Props = {
    target: Todo
};

const style = css`
cursor: pointer;
fontSize: 12px;
color: red;
margin-left: 5px;
`

const RemoveTaskButton: FC<PropsWithChildren<Props>> = ({
    target,
}) => {

    const removeTask = (target: Todo) => {
        deleteDoc(doc(db, 'todos', target.key))
    }

    return <span onClick={() => removeTask(target)} className={style}><FaRegTrashAlt /></span>
}
export default RemoveTaskButton;