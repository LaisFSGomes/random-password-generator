import React from "react";
import { AppWrapper } from "./AppBarr.styles";

export const AppBarr: React.FC = () => {
  return (
    <React.Fragment>
        <AppWrapper position="static">
          <h1>Random Password Generator</h1>
        </AppWrapper>
    </React.Fragment>
  );
};
