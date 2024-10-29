// ./src/components/Learner.jsx

// imports
import Score from "./Score";

function Learner({learners}){
    return(
         <ul>
            {learners.map((learner) => (
                <li key={learner.id}>
                    <h2>{learner.name}</h2>
                    <p>{learner.bio}</p>
                    <Score scores={learner.scores} />
                    </li>
                ))}        
        </ul>
    )
}

export default Learner;