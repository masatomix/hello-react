import { FC, useEffect, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { css } from '@emotion/react'
import RemoveTaskButton from 'components/molecules/removeTaskButton';
import type { Todo } from 'data';
import AddTaskButton from 'components/molecules/AddTaskButton';
import DeleteEndTaskButton from 'components/molecules/DeleteEndTaskButton';
import InputTaskName from 'components/molecules/InputTaskName';
import IsDoneCheckBox from 'components/molecules/IsDoneCheckBox';

type Props = { pageTitle: string };

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
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const [formData, setFormData] = useState<Todo>({ key: '', name: '', isDone: false });
  const [remainingTasksLength, setRemainingTasksLength] = useState<number>(0);

  useEffect(() => {
    setRemainingTasksLength(_ => todos.filter(todo => !todo.isDone).length)
  }, [todos])

  return (
    <>
      <Heading size="lg" as="h1" my={8}>
        {pageTitle}
      </Heading>
      <h1>My Todo Task<span css={infoStyle}>({remainingTasksLength}/{todos.length})</span>
        <DeleteEndTaskButton todos={todos} setTodos={setTodos} />
      </h1>
      <InputTaskName formData={formData} setFormData={setFormData} />
      <AddTaskButton formData={formData} setTodos={setTodos} />
      <ul>
        {todos.map((todo, index) => (
          <li key={todo.key}>
            <IsDoneCheckBox todos={todos} setTodos={setTodos} isChecked={todo.isDone} index={index} />
            <span css={doneStyle(todo.isDone)}>{todo.name}</span>
            <RemoveTaskButton todos={todos} setTodos={setTodos} index={index} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default Home;
