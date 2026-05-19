import "./App.css";
import User from "./components/User";
import ListNames from "./components/ListNames";
import TodoList from "./components/TodoList";
import Layout, { LeftCol, RightCol } from "./components/Layout";
const defaultImage = "https://via.placeholder.com/32x32.png";

function App() {
  const user = {
    id: 1,
    name: "John Doe",
    image: "https://github.com/lifeisfoo.png",
  };

  const lists = [
    { id: 1, name: "Importante", unone_count: 0 },
    { id: 2, name: "Film da vedere", unone_count: 2 },
    { id: 3, name: "Libri da leggere", unone_count: 0 },
  ];

  const todos = [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Learn Python", done: false },
    { id: 3, text: "Learn .Net", done: false },
  ];
  return (
    <Layout>
      <LeftCol>
        <User user={user} />
        <hr />
        <ListNames lists={lists} selectedListId={1} />
      </LeftCol>
      <RightCol>
        <TodoList todos={todos} />
      </RightCol>
    </Layout>
  );
}

export default App;
