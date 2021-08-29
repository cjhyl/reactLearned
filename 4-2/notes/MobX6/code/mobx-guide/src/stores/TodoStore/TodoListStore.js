import TodoViewStore from './TodoViewStore'
import {
  action,
  makeObservable,
  observable,
  computed,
  runInAction
} from "mobx"
import axios from "axios"

class TodoListStore {
  todos = []
  constructor(todos) {
    if (todos) this.todos = todos
    // 相对于makeAutoObservable，所有需要改造的属性、方法都要在第二个参数中指定
    makeObservable(this, {
      todos: observable,
      createTodo: action,
      unCompletedTodoCount: computed,
    })
    this.loadTodos()
  }
  get unCompletedTodoCount() {
    return this.todos.filter(todo => !todo.completed).length
  }
  createTodo(title) {
    this.todos.push(new TodoViewStore(title))
  }
  async loadTodos() {
    let todos = await axios
      .get("http://localhost:3005/todos")
      .then(response => response.data)
    // console.log(todos);
    runInAction(() => {
      todos.forEach(todo => {
        this.todos.push(new TodoViewStore(todo.title))
      })
    })
  }
}

export default TodoListStore