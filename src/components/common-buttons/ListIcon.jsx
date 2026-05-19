import listIcon from "bootstrap-icons/icons/list-ul.svg";

export default function ListIcon() {
  const btnClasses = "btn btn-sm btn-outline-secondary mx-1 py-0  border-0";
  return (
    <button className={btnClasses}>
      <img src={listIcon} width="16" height="16" />
    </button>
  );
}
