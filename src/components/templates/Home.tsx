import { FC, useState } from 'react';
import { Heading } from '@chakra-ui/react';
import { css } from '@emotion/css';
import type { Todo } from 'data';
import AddTaskButton from 'components/molecules/AddTaskButton';
import DeleteEndTaskButton from 'components/molecules/DeleteEndTaskButton';
import InputTaskName from 'components/molecules/InputTaskName';
import IsDoneCheckBox from 'components/molecules/IsDoneCheckBox';
import RemoveTaskButton from 'components/molecules/RemoveTaskButton';

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

const h1Style = css`border-bottom: 1px solid #ddd;`
const ulStyle = css`padding:0;list-style: none;`
const liStyle = css`line-height: 1.5;`


//   const getTextareaStyle = (isValid: boolean) => css`
//   border: solid 1px ${isValid ? "green" : "red"};
// `

const Home: FC<Props> = ({ pageTitle }) => {
  const initTodos: Todo[] = JSON.parse(localStorage.getItem("todos") as string) as Todo[] ?? []
  const [todos, setTodos] = useState<Todo[]>(initTodos);
  const [formData, setFormData] = useState<Todo>({ key: '', name: '', isDone: false });

  const remaining = todos.filter(todo => !todo.isDone)

  const contents = todos.map((todo) => (
    <li key={todo.key} className={liStyle}>
      <IsDoneCheckBox setTodos={setTodos} target={todo} />
      <span className={doneStyle(todo.isDone)}>{todo.name}</span>
      <RemoveTaskButton setTodos={setTodos} target={todo} />
    </li>
  ))

  return (
    <>
      <Heading size="lg" as="h1" my={8}>
        {pageTitle}
      </Heading>
      <h1 className={h1Style}>My Todo Task<span className={infoStyle}>({remaining.length}/{todos.length})</span>
        <DeleteEndTaskButton setTodos={setTodos} />
      </h1>
      <InputTaskName formData={formData} setFormData={setFormData} />
      <AddTaskButton formData={formData} setFormData={setFormData} setTodos={setTodos} />
      <ul className={ulStyle}>{contents.length ? contents : <li>Todo なし</li>}</ul>
    </>
  );
};

export default Home;
