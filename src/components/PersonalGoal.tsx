interface IPersonalGoalProps {
  title: string;
  description: string;
  id: number;
  onDelete: (goalId: number) => void;
}

const PersonalGoal = ({
  title,
  description,
  id,
  onDelete,
}: IPersonalGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
};

export default PersonalGoal;
