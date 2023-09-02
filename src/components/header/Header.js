import React from "react";

function Header() {
  return (
    <header data-test="header-component" className="header">
      <h1>✔️ Task List</h1>
      <p>
        Break your life to simple tasks to get things done!
        <br /> Does not matter how many tasks you done, It’s important to break
        to small tasks and be on progress.
      </p>
    </header>
  );
}

export default Header;
