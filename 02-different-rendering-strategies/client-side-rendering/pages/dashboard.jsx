import React from "react";
// import "../styles/Main.css";

export default function Dashboard() {
  return (
    <div class="container">
      <h1>Dashboard</h1>

      <div class="widget">
        <img src="https://picsum.photos/200/300" alt="Image 1" />
        <h2>Widget 1</h2>
        <p>Description of Widget 1</p>
      </div>

      <div class="widget">
        <img src="https://picsum.photos/200/300" alt="Image 2" />
        <h2>Widget 2</h2>
        <p>Description of Widget 2</p>
      </div>

      <div class="widget">
        <img src="https://picsum.photos/200/300" alt="Image 3" />
        <h2>Widget 3</h2>
        <p>Description of Widget 3</p>
      </div>
    </div>
  );
}
