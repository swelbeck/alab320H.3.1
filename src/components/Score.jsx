// ./src/components/Score.jsx

function Score({scores}){
    
    return(
       <div>
        {scores.map((scoreData) => (
            <>
            <p key={scoreData.id}>{scoreData.date}</p>
            <p>Score: {scoreData.score}</p>
            </>
        ))}
       </div>    
    )
}

export default Score;