import { FC, useEffect, useState } from 'react';
import { Box, Container, Heading } from '@chakra-ui/react';
import { css } from '@emotion/css';
import type { Todo } from 'data';
import AddTaskButton from 'components/molecules/AddTaskButton';
import DeleteEndTaskButton from 'components/molecules/DeleteEndTaskButton';
import InputTaskName from 'components/molecules/InputTaskName';
import TaskTable from 'components/molecules/TaskTable';

type Props = { pageTitle: string };

const infoStyle = css`
color: #bbb;
font-size: 12px;
`

const h1Style = css`border-bottom: 1px solid #ddd;`
// const ulStyle = css`list-style: none;`
// const liStyle = css``

//   const getTextareaStyle = (isValid: boolean) => css`
//   border: solid 1px ${isValid ? "green" : "red"};
// `

const Home: FC<Props> = ({ pageTitle }) => {
  const initTodos: Todo[] = JSON.parse(localStorage.getItem("todos") as string) as Todo[] ?? []
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const [formData, setFormData] = useState<Todo>({ key: '', name: '', isDone: false });

  const remaining = todos.filter(todo => !todo.isDone)

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  // const contents = todos.map((todo) => (
  //   <li key={todo.key} className={liStyle}>
  //     <IsDoneCheckBox setTodos={setTodos} target={todo} />
  //     <span className={doneStyle(todo.isDone)}>{todo.name}</span>
  //     <RemoveTaskButton setTodos={setTodos} target={todo} />
  //   </li>
  // ))

  return (
    <Container py="3" maxW="600px">
      <Heading size="lg" as="h1" my={8}>
        {pageTitle}
      </Heading>
      <h1 className={h1Style}>My Todo Task<span className={infoStyle}>({remaining.length}/{todos.length})</span>
        <DeleteEndTaskButton className={css`float: right;`} setTodos={setTodos} />
      </h1>
      <Box display='flex' mt='2' alignItems='center'>
        <InputTaskName formData={formData} setFormData={setFormData} />
        <AddTaskButton formData={formData} setFormData={setFormData} setTodos={setTodos} />
      </Box>
      {todos.length ?
        <TaskTable todos={todos} setTodos={setTodos} /> :
        <div>Todo なし</div>}
    </Container>
  );
};

export default Home;
