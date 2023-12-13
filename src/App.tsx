import { useState } from 'react';

import Header from './components/Header.tsx';
import PersonalGoalList from './components/PersonalGoalList.tsx';
import goalsImg from './assets/goals.jpg';

export interface IPersonalGoal {
  title: string;
  description: string;
  id: number;
}

const App = () => {
  const [goals, setGoals] = useState<IPersonalGoal[]>([]);

  function addGoalHandler() {
    console.log('button is clicked');

    setGoals((prevGoals) => {
      const newGoal: IPersonalGoal = {
        title: 'Learn React + TS',
        description: 'Learn it in depth!',
        id: Math.random(),
      };

      return [...prevGoals, newGoal];
    });
  }

  function deleteGoalHandler(goalId: number) {
    setGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== goalId));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Personal Goals</h1>
      </Header>
      <PersonalGoalList goals={goals} onDeleteGoal={deleteGoalHandler}/>
      <button onClick={addGoalHandler}>Add Goal</button>
    </main>
  );
};

export default App;
