// Write your code here

import './index.css'

const TodoItem = props => {
  const {details, deleteTodo} = props
  const {title, id} = details

  const onClickDelete = () => {
    deleteTodo(id)
  }

  return (
    <li>
      <p>{title}</p>
      <button type="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
