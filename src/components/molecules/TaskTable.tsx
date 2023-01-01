import { Dispatch, FC, SetStateAction, useEffect } from 'react';
import { Table, TableContainer, Tbody, Td, Tfoot, Th, Thead, Tr } from '@chakra-ui/react';
import { css } from '@emotion/css';
import type { Todo } from 'data';
import { query, collection, onSnapshot } from 'firebase/firestore';
import { db } from 'firebaseConfig'
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

  useEffect(() => {
    const q = query(collection(db, 'todos'));
    const unsubscribe = onSnapshot(q, querySnapshot => {
      // // querySnapshot.docChanges().forEach(change => {
      // //   console.log(change.type)
      // // })
      // const newTodos: Todo[] = []
      // querySnapshot.forEach(doc => {
      //   const data = doc.data()
      //   // const todo: Todo = { name: data.name, key: doc.id, isDone: data.isDone }
      //   newTodos.push(data as Todo)
      // })

      const newTodos = querySnapshot.docs.map(doc => doc.data() as Todo)
      setTodos(_ => newTodos)
    })

    return () => unsubscribe()
  }, [])


  return todos.length ?
    <TableContainer>
      <Table size='sm'>
        <Thead>
          <Tr>
            <Th>No.</Th>
            <Th>isDone</Th>
            <Th>タスク名</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {
            todos.map((todo, index) => (
              <Tr key={todo.key}>
                <Td>{index + 1}</Td>
                <Td><IsDoneCheckBox target={todo} /></Td>
                <Td><span className={doneStyle(todo.isDone)}>{todo.name}</span></Td>
                <Td><RemoveTaskButton target={todo} /></Td>
              </Tr>
            ))
          }
        </Tbody>
        <Tfoot>
          <Tr>
            <Th>No.</Th>
            <Th>isDone</Th>
            <Th>タスク名</Th>
            <Th></Th>
          </Tr>
        </Tfoot>
      </Table>
    </TableContainer> :
    <div>Todo なし</div>
}

export default TaskTable;