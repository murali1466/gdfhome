import React from "react";
import { UserContext } from ".";
export default function Demo() {
  return (
    <>
      <div>
        <UserContext.Consumer>{user}</UserContext.Consumer>
      </div>
    </>
  );
}
