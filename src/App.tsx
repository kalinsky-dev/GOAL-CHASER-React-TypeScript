import Header from './components/Header.tsx';
import goalsImg from './assets/goals.jpg';
import PersonalGoal from './components/PersonalGoal.tsx';

const App = () => {
  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Personal Goals</h1>
      </Header>
      <PersonalGoal title='Learn React + TS'>
        <p>Learn it from the ground up</p>
      </PersonalGoal>
    </main>
  );
};

export default App;
