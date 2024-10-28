import { useState } from 'react'
import Learner from './components/Learner'
import Score from './components/Score'
import learners from './utilities/data.mjs'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  
  const [learnerData, setLearnerData] = useState({
    learners: []
  })
  let newLearnerArr = [...learners];
  console.log(newLearnerArr[0].scores[0])

  return (
    <main>

      <Learner/>
      <Score />
    </main>
  )
}

export default App
