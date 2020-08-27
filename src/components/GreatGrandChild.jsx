import React from "react";
import { useContext } from "react";
import { TitleContext } from "../contexts/TitleContext";

export default function GreatGrandChild() {
  const { title, setTitle } = useContext(TitleContext);
  return (
    <div>
      <p>
        GreatGrandChild -<small>{title}</small>
      </p>
      <button onClick={() => setTitle("hej")}>Ändra titel</button>
      <h3></h3>
    </div>
  );
}
