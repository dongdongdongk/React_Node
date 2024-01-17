import React, { useState } from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

// 함수형 컴포넌트인 App 선언
const App = () => {
  // useState 훅을 사용하여 courseGoals 상태와 해당 상태를 업데이트하는 setCourseGoals 함수를 선언
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course1111111111111' },
    { id: 'cg2', text: 'Finish the Course2222222222222' },
    { id: 'cg3', text: 'Finish the Course3333333333333' }
  ]);

  // 새 목표를 추가하는 핸들러 함수인 addNewHandler 선언
  const addNewHandler = (newGoal) => {
    // setCourseGoals 함수를 사용하여 기존의 courseGoals 배열에 새 목표(newGoal)를 추가하여 업데이트
    // setCourseGoals(courseGoals.concat(newGoal));
    
    // 향상된 상태 업데이트 방법
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  // JSX로 구성된 App 컴포넌트의 반환 값
  return (
    <div className='course-goals'>
      {/* 헤딩 태그를 이용해 코스 목표를 표시하는 섹션 제목 */}
      <h2>Course Goals</h2>

      {/* NewGoal 컴포넌트를 렌더링하고, 새 목표 추가 핸들러를 props로 전달 */}
      <NewGoal onAddGoal={addNewHandler} />

      {/* GoalList 컴포넌트를 렌더링하고, 현재의 courseGoals 배열을 goals props로 전달 */}
      <GoalList goals={courseGoals} />
    </div>
  );
}

// App 컴포넌트를 외부로 내보내기
export default App;
