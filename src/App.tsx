import { useState } from 'react';

import Header from './components/Header.tsx';
import PersonalGoalList from './components/PersonalGoalList.tsx';
import goalsImg from './assets/goals.jpg';

interface PersonalGoal {
  title: string;
  description: string;
  id: number;
}

const App = () => {
  const [goals, setGoals] = useState<PersonalGoal[]>([]);

  function addGoalHandler() {
    console.log('button is clicked');

    setGoals((prevGoals) => {
      const newGoal: PersonalGoal = {
        title: 'Learn React + TS',
        description: 'Learn it in depth!',
        id: Math.random(),
      };

      return [...prevGoals, newGoal];
    });
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Personal Goals</h1>
      </Header>
      <PersonalGoalList goals={goals} />
      <button onClick={addGoalHandler}>Add Goal</button>
    </main>
  );
};

export default App;
