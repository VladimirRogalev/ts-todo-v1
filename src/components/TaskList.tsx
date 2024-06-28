import {useState} from 'react';
import Task from './Task.tsx';

const TaskList = () => {

    // constructor(props);{
    //     super(props);
    //     this.state = {
    //         tasks: ['Task 1', 'Task 2', 'Task 3']
    //     };
    // }

    const [tasks, setTasks] = useState<string[]>(['Task 1', 'Task 2', 'Task 3']);

    const deleteTask = (index: number) => {
        let tasksCopy = [...tasks];
        tasksCopy.splice(index, 1);
        setTasks(tasksCopy);
    };


    const updateTask = (index: number, content: string) => {
        let tasksCopy = [...tasks];
        tasksCopy[index] = content;
        setTasks(tasksCopy);
    };



        return (
            <div className={'field'}>
                <button className={'btn new'}>Add Task</button>
                {tasks.map((t, i) => <Task key={i + 1}
                                                      index={i}
                                                      updateTask={updateTask}
                                                      deleteTask={deleteTask}>{t}</Task>)
                }</div>
        );

};

export default TaskList