import React from 'react'
import {TodoItem} from './TodoItem';

export const Todo = (props) => {
    return (
        <div className="container py-3">
           <h3 className="mt-4"> Todo List !! </h3>
            {/* {props.todoArr[0].title}
            {props.todoArr[0].desc}
            {props.todoArr[0].id} */}
        {props.todoArr.length===0? "No todo available" : 
        
        props.todoArr.map((todo)=>{
            return(

                <TodoItem key={todo.id} todo={todo} remove={props.onRemove}/>
            );
        })}
        
        </div>
    )
}
