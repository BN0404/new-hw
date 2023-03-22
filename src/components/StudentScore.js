import studentData from "../data/studentData";

function StudentScore(props) {
    const { score } = props;
   

    return (
        <div>
            <h2><u>Student Scores: </u></h2>
            <h3>Student Date: { score.date} </h3>
            <h3>Student Score: { score.score}</h3>

        </div>
        )
    
};

export default StudentScore;