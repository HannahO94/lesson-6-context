import React from "react";
import GreatGrandChild from "./GreatGrandChild";

export default function GrandChild() {
  return (
    <div>
      <p>
        GrandChild - <small></small>
      </p>
      <GreatGrandChild />
    </div>
  );
}
