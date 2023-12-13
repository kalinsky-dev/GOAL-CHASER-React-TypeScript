import PersonalGoal from './PersonalGoal.tsx';
import { IPersonalGoal } from '../App.tsx';

interface IPersonalGoalListProps {
  goals: IPersonalGoal[];
  onDeleteGoal: (goalId: number) => void;
}

const PersonalGoalList = ({ goals, onDeleteGoal }: IPersonalGoalListProps) => {
  return (
    <ul>
      {goals.map((goal) => (
        <li key={goal.id}>
          <PersonalGoal
            title={goal.title}
            description={goal.description}
            id={goal.id}
            onDelete={onDeleteGoal}
          />
        </li>
      ))}
    </ul>
  );
};

export default PersonalGoalList;
