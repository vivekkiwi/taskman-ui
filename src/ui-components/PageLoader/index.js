import React from "react";
import { Overlay } from "@src/ui-components";
import * as s from "./index.module.scss";

function PageLoader() {
  return (
    <Overlay className={s.container} open>
      <div className={s.spinner}>Loading...</div>
    </Overlay>
  );
}

export default PageLoader;
