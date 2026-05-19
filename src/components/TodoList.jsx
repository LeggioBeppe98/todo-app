import TodoItem from "./TodoItem";
export default function TodoList({ todos }) {
  return (
    <ul className="list-group pb-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} done={todo.done} />
      ))}
    </ul>
  );
}
