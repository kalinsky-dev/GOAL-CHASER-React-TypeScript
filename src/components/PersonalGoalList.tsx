import PersonalGoal from './PersonalGoal.tsx';
import { IPersonalGoal } from '../App.tsx';

interface IPersonalGoalListProps {
  goals: IPersonalGoal[];
}

const PersonalGoalList = ({ goals }: IPersonalGoalListProps) => {
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
