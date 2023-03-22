import studentData
    from "../data/studentData";
 import StudentScore from "./StudentScore";

function Student(props) {
    const { studentData } = props;
    return (
        <div className="studentRecords">
            <h1><u> Student Information: </u></h1>
            
        <h2>Student Name: {studentData.name} </h2>
            <h2><u>Student Biodata: </u>{studentData.bio} </h2>
            {studentData.scores.map((score) =>
                <StudentScore score={score} />
            )}
        </div>
        )
}

export default Student;
