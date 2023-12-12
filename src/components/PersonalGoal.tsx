
interface PersonalGoalProps {
  title: string;
  description: string;
}

const PersonalGoal = ({ title, description }: PersonalGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};

export default PersonalGoal;
