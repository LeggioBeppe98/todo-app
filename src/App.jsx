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
  return (
    <Layout>
      <LeftCol>
        <User user={user} />
        <hr />
        <ListNames />
      </LeftCol>
      <RightCol>
        <TodoList />
      </RightCol>
    </Layout>
  );
}

export default App;
