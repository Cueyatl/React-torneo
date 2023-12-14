type Task = {
  task: string;
  deleteTask: () => void;
};

export const Task = ({ task, deleteTask }: Task) => {
  return (
    <div>
      <span>{task}</span>
      <button type="button" onClick={deleteTask}>
        delete
      </button>
    </div>
  );
};
