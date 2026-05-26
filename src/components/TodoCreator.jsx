import { useState } from "react";
import PlusIcon from "./common-buttons/PlusIcon";

export default function TodoCreator({ onCreate }) {
  // Dichiaro la variabile di stato del componente
  const [text, setText] = useState("");

  return (
    <div
      style={{ width: "70%" }}
      className=" position-absolute bottom-0 bg-light p-3 rounded d-flex align-items-center"
    >
      <PlusIcon />
      <input
        type="text"
        className="bg-light border-0 flex-grow-1 mx-2 py-1"
        placeholder="Aggiungi un'attività"
        onChange={(event) => {
          setText(event.target.value);
        }}
        value={text}
        onKeyUp={(event) => {
          if (event.key === "Enter") {
            if (text.trim().length > 0) {
              onCreate(text);
              setText("");
            }
          }
        }}
      />
    </div>
  );
}
