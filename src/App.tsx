import { useState } from 'react';

import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import PersonalGoal from './components/PersonalGoal.tsx';

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
      <button onClick={addGoalHandler}>Add Goal</button>
      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <PersonalGoal title={goal.title} description={goal.description} />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default App;
