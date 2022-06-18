import React from 'react';
import ACL from './ACL';
import Button from './Button';


export const task=[
   
    {id:1 ,title:"Task1" },
    {id:2 ,title:"Task2 "},
    {id:3 ,title:"Task3 "},
    {id:4 ,title:"Task4 "},
 ]

 function Task (props){

    
    
    return(

        <div>
           
            <ol>
                {task.map((item)=>(
                    <li key={item.id}>{item.title}
                    <Button permission="EDIT_TASK">Edit</Button>
                    <Button permission="DELETE_TASK">Del</Button>
                    </li>
                    
                ))}
            </ol>
        </div>

    )

}

export default  ACL(Task)