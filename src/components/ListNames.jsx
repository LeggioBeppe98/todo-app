import ListIcon from "./common-buttons/ListIcon";

const navLinkStyle = { cursor: "pointer" };

function ListItem({ isSelected, name, count }) {
  const textColor = isSelected ? "text-white" : "text-black";
  return (
    <li
      className={`nav-item d-flex align-items-center ${isSelected ? "active" : ""}`}
      style={navLinkStyle}
    >
      <ListIcon />
      <span className={`{${textColor} ms-2`}>{name}</span>
      <small className={`${textColor} fw-ligther ms-auto`}>{count}</small>
    </li>
  );
}

export default function ListNames({ lists, selectedListId }) {
  return (
    <ul className="nav nav-pills flex-column mb-auto">
      {lists.map((t, idx) => {
        return (
          <ListItem
            key={t.id}
            name={t.name}
            isSelected={selectedListId === idx}
            count={t.undone_count}
          />
        );
      })}
    </ul>
  );
}
