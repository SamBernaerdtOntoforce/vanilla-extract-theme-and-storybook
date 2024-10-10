import { ReactElement } from "react";
import { componentA } from "./ComponentA.css.ts";
import { themeBlue } from "./theme.css.ts";

function ComponentA(): ReactElement {
  return (
    <div className={themeBlue}>
      <div className={componentA}>Component A</div>
    </div>
  );
}

export default ComponentA;
