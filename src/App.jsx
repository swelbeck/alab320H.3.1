import { useState } from 'react'
import Learner from './components/Learner'
import learners from './utilities/data.mjs'
import './App.css'

function App() {
  const [learnerData, setLearnerData] = useState({ learners });
  // console.log(learnerData)
  return (
    <main>
      <Learner learners={learnerData.learners}/>
    </main>
  )
}

export default App
