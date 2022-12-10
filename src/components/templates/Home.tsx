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

// const initTodos: Todo[] = [
//   { key: getKey(), name: "task 1", isDone: false },
//   { key: getKey(), name: "task 2", isDone: false },
//   { key: getKey(), name: "task 3", isDone: true },
//   { key: getKey(), name: "task 4", isDone: false }
// ]


const style = css`
cursor: pointer;
fontSize: 12px;
color: red;
`
const infoStyle = css`
color: #bbb;
font-size: 12px;
`
const isDoneStyle = css`
text-decoration: line-through;
color:#bbb
`
const doneStyle = (isDone: boolean) => isDone ? isDoneStyle : css``

//   const getTextareaStyle = (isValid: boolean) => css`
//   border: solid 1px ${isValid ? "green" : "red"};
// `

const Home: FC<Props> = ({ pageTitle }) => {
  const initTodos: Todo[] = JSON.parse(localStorage.getItem("todos") as string) as Todo[] ?? []
  const [formData, setFormData] = useState<Todo>({ key: '', name: '', isDone: false });
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const [remainingTasks, setRemainingTasks] = useState<Todo[]>([]);


  // useEffect(() => {
  //   const initTodos: Todo[] = [
  //     { key: getKey(), name: "task 1", isDone: false },
  //     { key: getKey(), name: "task 2", isDone: false },
  //     { key: getKey(), name: "task 3", isDone: true },
  //     { key: getKey(), name: "task 4", isDone: false }
  //   ]
  //   setTodos(initTodos)
  // }, [])

  // useEffect(() => {
  //   console.log(formData)
  // }, [formData])

  useEffect(() => {
    setRemainingTasks(_ => todos.filter(prev => !prev.isDone))
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTask = (event: SyntheticEvent) => {
    event.stopPropagation();
    const data = { ...formData, key: getKey() }
    setTodos(todos => [...todos, data])
  }

  const removeTask = (index: number) => {
    todos.splice(index, 1)
    setTodos(_ => [...todos])
  }


  const deleteEndTask = () => {
    setTodos(_ => [...remainingTasks])
  }


  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name } = event.target
    const value = event.target.value;
    setFormData(todo => ({ ...todo, [name]: value }))
  }

  const handleCheckbox = (targetIndex: number) => {
    setTodos(_ => todos.map((todo, index) =>
      index === targetIndex ?
        { ...todo, isDone: !todo.isDone }
        : todo
    ))
  }

  return (
    <>
      <Heading size="lg" as="h1" my={8}>
        {pageTitle}
      </Heading>

      <h1>My Todo Task<span css={infoStyle}>({remainingTasks.length}/{todos.length})</span>
        <Button css={css`float: right;`} onClick={() => deleteEndTask()}>完了タスクの削除</Button>
      </h1>
      <Input name='name' value={formData.name} onChange={handleChange} />
      <Button onClick={addTask}>追加</Button>
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.key}>
            <Checkbox name="isDone" isChecked={todo.isDone} onChange={() => handleCheckbox(index)} />
            <span css={doneStyle(todo.isDone)}>{todo.name}</span>
            <span onClick={() => removeTask(index)} css={style}>[x]</span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
