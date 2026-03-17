import TodoItem from "./TodoItem";
export default function TodoList({  }) {
    const itemClasses = "list-group-item border rounded -1 my-1";
    return(
        <ul className="list-group pb-3">
            <TodoItem text="Learn React" done={true} />
            <TodoItem text="Learn Python" done={false} />
            <TodoItem text="Learn .Net" done={false} />
        </ul>
    );
}