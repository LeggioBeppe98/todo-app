import TodoItem from "./TodoItem";
export default function TodoList() {
  const itemClasses = "list-group-item border rounded -1 my-1";
  const todos = [
    { id: 1, text: "Learn React", done: true },
    { id: 2, text: "Learn Python", done: false },
    { id: 3, text: "Learn .Net", done: false },
  ];
  return (
    <ul className="list-group pb-3">
      {todos.map((todo) => (
        <TodoItem key={todo.id} text={todo.text} done={todo.done} />
      ))}
    </ul>
  );
}
