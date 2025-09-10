import React from 'react';

interface MyTasksProps {
  tasks: string[];
}

const MyTasks: React.FC<MyTasksProps> = ({ tasks }) => {
  return (
    <div className="my-tasks">
      <h2>My Tasks</h2>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default MyTasks;