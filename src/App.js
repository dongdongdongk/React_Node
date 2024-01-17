import React from 'react'
import './App.css';
import GoalList from './components/GoalList';

const courseGaols = [
  { id: 'cg1', text: 'Finish the Course1111111111111' },
  { id: 'cg2', text: 'Finish the Course2222222222222' },
  { id: 'cg3', text: 'Finish the Course3333333333333' }
]

function App() {
  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <GoalList goals ={courseGaols}/>
    </div>
  );
}

export default App;
