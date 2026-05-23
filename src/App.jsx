import "./App.css";
import User from "./components/User";
import ListNames from "./components/ListNames";
import TodoList from "./components/TodoList";
import Layout, { LeftCol, RightCol } from "./components/Layout";
import { useState } from "react";
import TodoCreator from "./components/TodoCreator";
import { v4 } from "uuid";

const defaultImage = "https://via.placeholder.com/32x32.png";

// Lista menu
const lists = [
  { id: 1, name: "Importante", unone_count: 0 },
  { id: 2, name: "Film da vedere", unone_count: 2 },
  { id: 3, name: "Libri da leggere", unone_count: 0 },
];

// Lista attiità suddivise su ogni funzione del menu
const initialTodos = [
  { listId: 1, id: 1, text: "Learn React", done: true },
  { listId: 1, id: 2, text: "Learn Python", done: false },
  { listId: 1, id: 3, text: "Learn .Net", done: false },

  { listId: 2, id: 1, text: "Harry Potter", done: true },
  { listId: 2, id: 2, text: "I maghi del crimine", done: false },
  { listId: 2, id: 3, text: "Naruto Shippuden", done: false },

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
  const [allTodos, setAllTodos] = useState(initialTodos)

  // Costante che contiene quali attività ci sono da fare in base alla voce del menu selezionata
  const selectListByIdx = (idx) => {
    setListIdx(idx);
    setTodos(allTodos.filter((t) => t.listId === lists[idx].id));
  };

  const handleCreateTodo = (text) => {
    const newTodo = {
      listId: lists[listIdx].id,
      id: uuid(),
      done: false,
      text: text,

    };

    setAllTodos([...allTodos, newTodo]);
    setTodos(...todos, newTodo);
  };

  return (
    <Layout>
      <LeftCol>
        <User user={user} />
        <hr />
        <ListNames
          lists={lists}
          selectedListId={listIdx}
          onListClick={selectListByIdx}
        />
      </LeftCol>
      <RightCol>
        <TodoList todos={todos} />
        <TodoCreator createTodo={handleCreateTodo} />
      </RightCol>
    </Layout>
  );
}

export default App;
