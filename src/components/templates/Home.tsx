import { FC, useState } from 'react';
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


const Home: FC<Props> = ({ pageTitle }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [formData, setFormData] = useState<Todo>({ key: '', name: '', isDone: false });

  const remaining = todos.filter(todo => !todo.isDone)

  return (
    <Container py="3" maxW="600px">
      <Heading size="lg" as="h1" my={8}>
        {pageTitle}
      </Heading>
      <h1 className={h1Style}>My Todo Task<span className={infoStyle}>({remaining.length}/{todos.length})</span>
        <DeleteEndTaskButton todos={todos} className={css`float: right;`} />
      </h1>
      <Box display='flex' mt='2' alignItems='center'>
        <InputTaskName formData={formData} setFormData={setFormData} />
        <AddTaskButton formData={formData} setFormData={setFormData} />
      </Box>
      <TaskTable todos={todos} setTodos={setTodos} />
    </Container>
  );
};

export default Home;
