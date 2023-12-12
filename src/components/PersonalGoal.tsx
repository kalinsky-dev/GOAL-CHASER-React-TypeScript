import { type ReactNode } from 'react';

interface PersonalGoalProps {
  title: string;
  children: ReactNode;
}

const PersonalGoal = ({ title, children }: PersonalGoalProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button>Delete</button>
    </article>
  );
};

export default PersonalGoal;
