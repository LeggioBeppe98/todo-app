import "./App.css";
import User from "./components/User";
import ListNames from "./components/ListNames";
import TodoList from "./components/TodoList";
import Layout, { LeftCol, RightCol } from "./components/Layout";
import { useState } from "react";
import TodoCreator from "./components/TodoCreator";
import { v4 as uuid } from "uuid";
import NoListView from "./components/NoListView";

const defaultImage = "https://via.placeholder.com/32x32.png";

// Lista menu
const initialList = [
  { id: 1, name: "Importante", undone_count: 3 },
  { id: 2, name: "Film da vedere", undone_count: 2 },
  { id: 3, name: "Libri da leggere", undone_count: 3 },
];

// Lista attiità suddivise su ogni funzione del menu
const initialTodos = [
  { listId: 1, id: 1, text: "Learn React", done: true },
  { listId: 1, id: 2, text: "Learn Python", done: false },
  { listId: 1, id: 3, text: "Learn .Net", done: false },

  { listId: 2, id: 1, text: "Harry Potter", done: true },
  { listId: 2, id: 2, text: "I maghi del crimine", done: false },

  { listId: 3, id: 1, text: "React -  Guida completa", done: true },
  { listId: 3, id: 2, text: "Guida Completa", done: false },
  { listId: 3, id: 3, text: "ASP .Net 9 and React 19", done: false },
];

const user = {
  id: 1,
  name: "John Doe",
  image: "https://github.com/lifeisfoo.png",
};

function App() {
  // Definizione hook useState,  definisco e inizializzo i due stati
  const [listIdx, setListIdx] = useState(-1);
  const [todos, setTodos] = useState([]);
  const [allTodos, setAllTodos] = useState(initialTodos);
  const [allList, setAllList] = useState(initialList);

  // Costante che contiene quali attività ci sono da fare in base alla voce del menu selezionata
  const selectListByIdx = (idx) => {
    setListIdx(idx);
    setTodos(allTodos.filter((t) => t.listId === allList[idx].id));
  };

  const handleCreateTodo = (text) => {
    const newTodo = {
      listId: allList[listIdx].id,
      id: uuid(),
      done: false,
      text: text,
    };

    setAllTodos([...allTodos, newTodo]);
    setTodos([...todos, newTodo]);
    const tmpLists = [...allList];
    tmpLists[listIdx].undone_count++;
    setAllList(tmpLists);
  };

  return (
    <Layout>
      <LeftCol>
        <User user={user} />
        <hr />
        <ListNames
          lists={allList}
          selectedListId={listIdx}
          onListClick={selectListByIdx}
        />
      </LeftCol>
      <RightCol>
        {listIdx === -1 ? (
          <NoListView />
        ) : (
          <>
            <TodoList todos={todos} />
            <TodoCreator onCreate={handleCreateTodo} />
          </>
        )}
      </RightCol>
    </Layout>
  );
}

export default App;
