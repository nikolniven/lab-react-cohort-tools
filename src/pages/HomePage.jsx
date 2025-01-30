import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import StudentCard from "../components/StudentCard";
import studentsData from "../assets/students.json";

function HomePage() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    console.log(studentsData); // Check if studentsData is loaded correctly
    setStudents(studentsData);
  }, []);

  return (
    <div className="border-2 border-rose-500 m-2">
      <h1>Home Page</h1>
      <div className="flex justify-between items-center p-2 font-bold border-b w-full">
        <span className="flex items-center justify-center" style={{ flexBasis: "20%" }}>Image</span>
        <span style={{ flexBasis: "20%" }}>Name</span>
        <span style={{ flexBasis: "20%" }}>Program</span>
        <span style={{ flexBasis: "20%" }}>Email</span>
        <span style={{ flexBasis: "20%" }}>Phone</span>
      </div>

      {students.map((student) => (
        <Link to={`/students/${student._id}`} key={student._id}>
          <StudentCard {...student} />
        </Link>
      ))}
    </div>
  );
}

export default HomePage;
