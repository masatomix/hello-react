import type { Dispatch, FC, SetStateAction, SyntheticEvent } from 'react';
import { Button } from '@chakra-ui/react';
import type { Todo } from 'data';
import { collection, updateDoc, doc, addDoc } from 'firebase/firestore';
import { db } from 'firebaseConfig'
import { AiOutlinePlus } from 'react-icons/ai'


// const getKey: () => string = () => Math.random().toString(32).substring(2);

type Props = {
    formData: Todo
    setFormData: Dispatch<SetStateAction<Todo>>
};

const AddTaskButton: FC<Props> = ({
    formData,
    setFormData,
}) => {
    const addTask = (event: SyntheticEvent) => {
        event.stopPropagation();
        const data = { ...formData }
        addDoc(collection(db, 'todos'), data).then(docref => {
            data.key = docref.id
            updateDoc(doc(db, 'todos', docref.id), data)
        })
        // setTodos(todos => [...todos, data])
        setFormData(formData => ({ ...formData, name: '' })) // テキストボックスを空に。
    }


    return <Button colorScheme='blue' onClick={addTask}><AiOutlinePlus size={30} /></Button>
}



export default AddTaskButton;
