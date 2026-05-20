import ListIcon from "./common-buttons/ListIcon";

const navLinkStyle = { cursor: "pointer" };

function ListItem({ isSelected, name, count, onClick }) {
  const textColor = isSelected ? "text-white" : "text-black";
  return (
    <li
      className={`nav-link d-flex align-items-center ${isSelected ? "active" : ""}`}
      style={navLinkStyle}
      onClick={onClick}
    >
      <ListIcon />
      <span className={`${textColor} ms-2`}>{name}</span>
      <small className={`${textColor} fw-lighter ms-auto`}>{count}</small>
    </li>
  );
}

export default function ListNames({ lists, selectedListId, onListClick }) {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {lists.map((t, idx) => {
        return (
          <ListItem
            key={t.id}
            name={t.name}
            isSelected={selectedListId === idx}
            count={t.undone_count}
            onClick={() => {
              onListClick(idx);
            }}
          />
        );
      })}
    </ul>
  );
}
