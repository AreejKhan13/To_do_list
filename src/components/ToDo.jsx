import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faTrashCan } from '@fortawesome/free-regular-svg-icons';
import { FaPen } from "react-icons/fa";

const ToDo =({toDo, markTask, setUpdateData, deleteTask}) => {
    return(
          <>
          {toDo && toDo
        .sort((a,b) => a.id > b.id ?1 : -1)
        .map( (task, index) => {
          return (
            <React.Fragment key={task.id}>
  
              <div className='col taskBg'>
  
                <div className={task.status ? 'done' : ''}>
                <span className='taskNumber'> {index + 1} </span>
              <span className='taskText'> {task.title} </span>
                </div>
  
                <div className='iconsWrap'>
                  <span title='cpm/uncomp'
                  onClick={ (e) => markTask(task.id)}>
                    <FontAwesomeIcon icon={faCircleCheck} />
                  </span>
  
  
                  {task.status ? null: (
                  <span title='edit'
                  onClick={ () => setUpdateData({
                    id: task.id,
                    title:task.title,
                    status: task.status ? true : false
                  })}>
                  <FaPen />
                  </span>
                  )}
  
                  <span title='delete'
                  onClick={() => deleteTask(task.id)}>
                  <FontAwesomeIcon icon={faTrashCan} />
                  </span>
                </div>
              </div>
  
            </React.Fragment>
          )
        }
    )}
          </>
    )
}
    export default ToDo;