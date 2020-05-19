import React from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="frame">
          <section className="header">
            <button className="header-btn">Add</button>
            <h1 className="header-title">To Do List</h1>
            <button className="header-btn main-color-red">Clear</button>
          </section>
          <section className="add">
            <form action="" className="add-form">
              <input type="text" className="add-input" />
              <button className="add-btn">Add</button>
            </form>
          </section>
          <section className="todos">
            <div className="todo">
              <p className="text-todo">Learning React</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
