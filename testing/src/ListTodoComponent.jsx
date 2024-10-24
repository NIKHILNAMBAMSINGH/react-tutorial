import React, { useState } from 'react'

const ListTodoComponent = () => {

    const dummyDate=[
        {
        "id":1,
        "name":"nikhil",
        "department":"Swt"
    }, 
    {
        "id":2,
        "name":"singamba",
        "department":"hwt"
    },
]

const[todo,setTodo]=useState(dummyDate)

  return (
    <div className='container'>
       <h2 className='text-center'>List of Todo</h2>
       <div>
        <table className='table table-bordered table-stripped'>
            <thead>
                <tr>
            
                    <th>Todo Name</th>
                    <th>Todo Department</th>
                </tr>
            </thead>
            <tbody>
                {
                    todo.map(todo=>
                        <tr key={todo.id}>
                            <td>{todo.name}</td>
                            <td>{todo.department}</td>
                            
                        </tr>
                    )
                }
            </tbody>
        </table>
       </div>
    </div>
  )
}

export default ListTodoComponent