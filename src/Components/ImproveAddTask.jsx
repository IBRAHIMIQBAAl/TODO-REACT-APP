const AddTask = ({tasklist,setTasklist,task,setTask}) => {
    // 5th step
  
    // 14th step
  
  
    // 7th step
  
    const handleSubmit = (e) => {
      e.preventDefault();
  
      if (e.target.task.value.trim() === '') {
        alert('Please enter a task');
        return;
      }
  
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value.trim(),
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      }
  
      if (task.id) {
        // If task exists, update it
        setTasklist(tasklist.map((item) => 
          item.id === task.id ? {...item, name: newTask.name} : item
        ));
        setTask({});
      } else {
        // If no task exists, add new task
        setTasklist([...tasklist, newTask]);
      }
  
      e.target.reset();
    }
  
    return (
      <>
      <section className="addTask">
        {/* 6th step */}
          <form action="" onSubmit={handleSubmit}>
              <input 
                type="text" 
                placeholder="Add Task" 
                name="task" 
                autoCapitalize="off" 
                maxLength={25}
                value={task.name || ''}
                onChange={(e) => setTask({...task, name: e.target.value})}
              />
              <button type="submit">{task.id ? 'Update' : 'Add'}</button>
          </form>
  
      </section>
      </>
    )
  };
  
  export default AddTask;