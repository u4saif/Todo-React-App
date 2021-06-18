import React from 'react'

export const TodoItem = (props) => {
    return (
        <>
        <div className="card-body rounded border border-success py-3 my-3">
          <h5 className="card-title">{props.todo.title}</h5>
          <p className="card-text">{props.todo.desc}</p>
          <button className="btn btn-danger" onClick={()=>{props.remove(props.todo)}}>Mark as Done</button>
        </div>
       
      </>
    )
}
