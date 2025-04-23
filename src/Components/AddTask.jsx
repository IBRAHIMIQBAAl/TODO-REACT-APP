import { useEffect, useRef } from 'react';

export default function AddTask({taskList, setTaskList, task, setTask}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (task.id && inputRef.current) {
      inputRef.current.focus();
      // Set cursor position to the end of the text
      const length = inputRef.current.value.length;
      inputRef.current.setSelectionRange(length, length);
    }
  }, [task.id]);

  function handleSubmit(e) {
    e.preventDefault();
    
    const taskValue = e.target.task.value.trim();
    if (!taskValue) {
      alert('Please enter a task');
      return;
    }

    if (task.id) {
      const date = new Date();
      const updatedTaskList = taskList.map((todo) => 
        todo.id === task.id ? {
          id: task.id,
          name: taskValue,
          time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
        } : todo
      );
      setTaskList(updatedTaskList);
      setTask({});
    } else {
      const date = new Date();
      const newTask = {
        id: date.getTime(),
        name: taskValue,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
      };
      setTaskList([...taskList, newTask]);
    }
    
    e.target.reset();
  }

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input 
          ref={inputRef}
          type="text" 
          placeholder="Add Task" 
          name="task" 
          autoComplete="off" 
          maxLength={25}
          defaultValue={task.name || ""}
        />
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
}
