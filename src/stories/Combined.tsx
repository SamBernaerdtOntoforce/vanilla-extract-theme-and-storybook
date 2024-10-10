import { ReactElement } from "react";
import ComponentA from "./ComponentA.tsx";
import ComponentB from "./ComponentB.tsx";

function Combined(): ReactElement {
  return (
    <div>
      <ComponentA />
      <ComponentB />
    </div>
  );
}

export default Combined;
