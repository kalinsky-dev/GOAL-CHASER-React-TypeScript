import { type IPersonalGoal } from '../App.tsx';
import { type ReactNode } from 'react';

import PersonalGoal from './PersonalGoal.tsx';
import InfoBox from './InfoBox.tsx';

interface IPersonalGoalListProps {
  goals: IPersonalGoal[];
  onDeleteGoal: (goalId: number) => void;
}

const PersonalGoalList = ({ goals, onDeleteGoal }: IPersonalGoalListProps) => {
  if (goals.length === 0) {
    return (
      <InfoBox mode='hint'>You have no goals yet. Why not add one?</InfoBox>
    );
  }
  let warningBox: ReactNode;
  if (goals.length >= 4) {
    warningBox = (
      <InfoBox mode='warning'>
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }
  return (
    <>
      {warningBox}
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
    </>
  );
};

export default PersonalGoalList;
