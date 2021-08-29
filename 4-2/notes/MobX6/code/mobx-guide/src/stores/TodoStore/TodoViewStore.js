import { makeObservable, observable, action } from "mobx"

class TodoViewStore {
  id = Math.random()
  title = ""
  completed = false
  constructor (title) {
    this.title = title
    // makeObservable中的action通过bound修饰更正this指向
    makeObservable(this, {
      completed: observable,
      toggle: action.bound
    })
  }
  toggle() {
    this.completed = !this.completed
  }
}

export default TodoViewStore