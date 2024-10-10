import { ReactElement } from "react";
import { componentB } from "./ComponentB.css.ts";
import { themeBlue } from "./theme.css.ts";

function ComponentB(): ReactElement {
  return (
    <div className={themeBlue}>
      <div className={componentB}>Component B</div>
    </div>
  );
}

export default ComponentB;
