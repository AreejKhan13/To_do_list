import React,{useState} from 'react';
import AddTaskForm from './components/AddTaskForm.jsx';
import UpdateForm from './components/UpdateForm.jsx';
import  ToDo from './components/ToDo.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
//Task State
  const [toDo, SetToDo] = useState([
    // {id: 1, title: "Task1", status:false},
    // {id:2, title:"Task2", status:false}
  ]);

  //Temp State

  const[newTask, setNewTask] = useState('');
  const[updateData, setUpdateData] = useState('');

  ///////////////////Add Task
  
  const addTask = () =>{
    if (newTask){
      let num = toDo.length + 1;
      const newEntry ={id:num , title:newTask, status:false}
      SetToDo([...toDo ,newEntry])
      setNewTask('')
    }
  }

  ///////////////////Delete Task
  const deleteTask = (id) =>{
    let newTask = toDo.filter(task => task.id !== id)
    SetToDo(newTask);
  }

    ////////////////////Mark Task
    const markTask = (id) =>{
      let newTask = toDo.map(
        task => {
          if(task.id === id){
            return({...task, status: !task.status})
          }
          return task;
        }
      )
      SetToDo(newTask);
    }

      ////////////////////Camcel Update
      const cancelUpdate = () =>{
        setUpdateData('');
      }

        ////////////////////Change Task for Update
        const updateTask = () =>{
            let filterRecords = [...toDo].filter (task => task.id !== updateData.id);
            let updatedObject = [...filterRecords, updateData]
            SetToDo(updatedObject);
            setUpdateData('');
        }

          ///////////////////Update Task
          const changeTask = (e) =>{
            let newEntry = {
              id: updateData.id,
              title: e.target.value,
              status: updateData.status ? true : false
            }
            setUpdateData(newEntry);
          }

  return (
    <div className="Container App">

      <br></br>
      <h2>To Do List App (ReactJS)</h2>
      <br></br>

{updateData && updateData ? (
  <UpdateForm 
  updateData = {updateData}
  changeTask = {changeTask}
  updateTask = {updateTask}
  cancelUpdate = {cancelUpdate}
  />
):(
  <AddTaskForm 
  newTask = {newTask}
  setNewTask = {setNewTask}
   addTask = {addTask}  
  />
)

}

      {/* Display ToDos */}

      {toDo && toDo.length ? '' : 'No Tasks...'}
    <ToDo
    toDo ={toDo} 
    markTask = {markTask} 
    setUpdateData = {setUpdateData} 
    deleteTask = {deleteTask}
    />

    </div>
  );
}

export default App;
