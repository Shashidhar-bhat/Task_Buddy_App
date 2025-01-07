import React from 'react'

export default function  TaskForm({addTask})  {
    const [task, setTask] = React.useState('');
    const [priority, setPriority] = React.useState("Medium");
    const [category , setCategory] = React.useState("General");

  const handlesubmit = (e) => {
    e.preventDefault();
   addTask({text: task, priority, category, completed: false});
   setPriority("Medium");
   setCategory("General");
   setTask('');
  };

  return (
        <form onSubmit={handlesubmit} className ='task-form'>
            <div>
                 <input 
                 type= 'text' 
                 value= {task}
                 required
                 onChange= {(e) => setTask(e.target.value)}
                 placeholder= " Enter Your Task"
                 />
                 <button type = 'submit'>ADD TASK</button>
                 </div>

                 <div id ="btns">
                    <select onChange = {(e) => setPriority(e.target.value)}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <select onChange = {(e) => setCategory(e.target.value)}>
                        <option value="General">General</option>
                        <option value="Work">Work</option>
                        <option value="Personal">Personal</option>
                        </select>
                        </div>
        </form>
  )
}
