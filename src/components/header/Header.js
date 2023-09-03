import React, { memo } from "react";
import { HiCheck } from "react-icons/hi";

function Header() {
  console.log("render header");
  return (
    <header data-test="header-component" className="header">
      <h1>
        <HiCheck /> Task List
      </h1>
      <p>
        Break your life to simple tasks to get things done!
        <br /> Does not matter how many tasks you done, It’s important to break
        to small tasks and be on progress.
      </p>
    </header>
  );
}

export default memo(Header);
