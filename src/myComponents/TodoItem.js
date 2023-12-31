import React from 'react'

export default function TodoItem({todo, onDelete}) {
  return (
    <div>
    <h4>{todo.title}</h4>
    <p>{todo.desc}</p>
    {/* call function by arroy method for todo */}
    <button className="btn btn-sm btn-danger" onClick={  ()=> onDelete(todo)}>Delete</button>
    </div>
  )
}
