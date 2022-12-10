import { ChangeEvent, Dispatch, FC, SetStateAction } from 'react';
import { Input } from '@chakra-ui/react';
import type { Todo } from 'data';

type Props = {
    formData: Todo
    setFormData: Dispatch<SetStateAction<Todo>>
};

const InputTaskName: FC<Props> = ({
    formData,
    setFormData,
}) => {

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name } = event.target
        const value = event.target.value;
        setFormData(todo => ({ ...todo, [name]: value }))
    }

    return <Input name='name' value={formData.name} onChange={handleChange} />
}

export default InputTaskName;
