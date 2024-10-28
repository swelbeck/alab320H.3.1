// ./src/components/Score.jsx

// imports
import learners from "../utilities/data.mjs";

function Score({scores}){
    
    return(
       <div>
        {scores.map((scoreData) => (
        <p key={scoreData.id}>{scoreData.date}: {scoreData.score}</p>
      ))}
       </div>
        
        
    )
}

export default Score;