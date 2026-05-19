import trashIcon from "bootstrap-icons/icons/trash.svg";

export default function TrashItem() {
  const btnClasses =
    "btn btn-sm btn-outline-secondary mx-1 py-0  opacity-25 border-0";
  return (
    <button className={btnClasses}>
      <img src={trashIcon} width="16" height="16" />
    </button>
  );
}
