import { ChangeEvent, FC, SyntheticEvent, useEffect, useState } from 'react';
import { Button, Checkbox, Heading, Input } from '@chakra-ui/react';
/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react'


type Props = { pageTitle: string };

export interface Todo {
  key: string,
  name: string;
  isDone: boolean;
}

const getKey = () => Math.random().toString(32).substring(2);

const Home: FC<Props> = ({ pageTitle }) => {
  const [formData, setFormData] = useState<Todo>({ key: '', name: '', isDone: false });
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const initTodos: Todo[] = [
      { key: getKey(), name: "task 1", isDone: false },
      { key: getKey(), name: "task 2", isDone: false },
      { key: getKey(), name: "task 3", isDone: true },
      { key: getKey(), name: "task 4", isDone: false }
    ]
    setTodos(initTodos)
  }, [])


  useEffect(() => {
    console.log(formData)
  }, [formData])

  const addTask = (event: SyntheticEvent) => {
    event.stopPropagation();
    const data = { ...formData, key: getKey() }
    setTodos(todos => [...todos, data])
  }

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = event.target
    const value = event.target.type === 'checkbox'
      ? (event.target as HTMLInputElement).checked
      : event.target.value;
    console.log(name)
    setFormData(todo => ({ ...todo, [name]: value }))
  }

  const style = css`
  cursor: pointer;
  fontSize: 12px;
  color: red;
  `

  return (
    <>
      <Heading size="lg" as="h1" my={8}>
        {pageTitle}
      </Heading>
      <Input name='name' value={formData.name} onChange={handleChange} />
      <Button onClick={addTask}>追加      </Button>
      <ul>
        {todos?.map(todo => (
          <li key={todo.key}>
            <Checkbox name="isDone" isChecked={todo.isDone}>isDone</Checkbox>
            <span>{todo.name}</span>
            <span onClick={addTask} css={style}>[x]</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
