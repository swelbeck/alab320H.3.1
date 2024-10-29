// ./src/components/Score.jsx

function Score({scores}){
    
    return(
       <div>
        {scores.map((scoreData) => (
            <div key={scoreData.id}>
                <p>Date: {scoreData.date}, Score: {scoreData.score}</p>
            </div>
        ))}
       </div>    
    )
}

export default Score;