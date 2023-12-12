import PersonalGoal from './PersonalGoal.tsx';

interface PersonalGoal {
  title: string;
  description: string;
  id: number;
}

interface PersonalGoalListProps {
  goals: PersonalGoal[];
}

const PersonalGoalList = ({ goals }: PersonalGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <PersonalGoal title={goal.title} description={goal.description} />
        </li>
      ))}
    </ul>
  );
};

export default PersonalGoalList;
