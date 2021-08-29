import { observer } from "mobx-react-lite"

function TodoView({ todo }) {
  return (
    <li className={todo.completed ? "completed" : ""}>
      <div className="view">
        <input
          checked={todo.checked}
          onChange={todo.toggle} 
          className="toggle" 
          type="checkbox" 
        />
        <label>{todo.title}</label>
        <button className="destroy" />
      </div>
      <input className="edit" />
    </li>
  )
}

export default observer(TodoView)
