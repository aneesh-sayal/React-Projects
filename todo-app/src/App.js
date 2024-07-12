import "./App.css";

import Header from "./components/Header";
import Todoitem from "./components/Todo-item";
import Button from "./Button";

import "./style.css";

function App() {
  return (
    <div className="todo-container">
      <Header />
      <Todoitem completed={true} text="Leetcode" />
      <Todoitem text="React" />
      <Todoitem completed={true} text="SQL" />
      <Todoitem text="CS Fundamentals" />
      <Button />
    </div>
  );
}

export default App;
