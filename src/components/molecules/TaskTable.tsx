import { Dispatch, FC, SetStateAction } from 'react';
import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { css } from '@emotion/css';
import type { Todo } from 'data';
import IsDoneCheckBox from 'components/molecules/IsDoneCheckBox';
import RemoveTaskButton from 'components/molecules/RemoveTaskButton';

const isDoneStyle = css`
text-decoration: line-through;
color:#bbb
`
const doneStyle = (isDone: boolean) => isDone ? isDoneStyle : css``

type Props = {
  todos: Todo[],
  setTodos: Dispatch<SetStateAction<Todo[]>>
};

const TaskTable: FC<Props> = ({ todos, setTodos }) => {
  const tmp = todos.map((todo, index) => (
    <Tr key={todo.key}>
      <Td>{index + 1}</Td>
      <Td><IsDoneCheckBox setTodos={setTodos} target={todo} /></Td>
      <Td><span className={doneStyle(todo.isDone)}>{todo.name}</span></Td>
      <Td><RemoveTaskButton setTodos={setTodos} target={todo} /></Td>
    </Tr>
  ))

  return (
    <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>isDone</Th>
            <Th>タスク名</Th>
            <Th>削除</Th>
          </Tr>
        </Thead>
        <Tbody>
          {tmp}
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>No.</Th>
            <Th>isDone</Th>
            <Th>タスク名</Th>
            <Th>削除</Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer>)
}

export default TaskTable;