import TrashItem from "./common-buttons/TrashItem";
const todoClasses =
  "d-flex align-items-center list-group-item my-1 border rounded-1";
//const btnClasses = "btn btn-sm btn-outline-secondary mx-1 py-0  opacity-25 border-0";

export default function TodoItem({ id, done, text }) {
  const textClasses = `mx-1 my-0 ps-3 flex-grow-1 ${done ? "text-decoration-line-through" : ""}`;

  return (
    <li className={todoClasses}>
      <input
        type="checkbox"
        className="form-check-input mx-1 my-0"
        checked={done}
        readOnly={true}
      />
      <p className={textClasses}>{text}</p>
      <TrashItem />
    </li>
  );
}
