import { FC } from 'react';
import { Checkbox } from '@chakra-ui/react';
import { css } from '@emotion/css';
import type { Todo } from 'data';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from 'firebaseConfig';

type Props = {
    target: Todo
};

const IsDoneCheckBox: FC<Props> = ({
    target,
}) => {
    const handleCheckbox = (target: Todo) => {
        updateDoc(doc(db, 'todos', target.key), {
            isDone: !target.isDone
        })
    }

    return <Checkbox name="isDone" isChecked={target.isDone}
        onChange={() => handleCheckbox(target)}
        className={css`margin-right: 5px;margin-top: 5px;`} />
}



export default IsDoneCheckBox;
