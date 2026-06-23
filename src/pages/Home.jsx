import { useState } from "react";
import Navbar from "../components/Navbar";
import StudentForm from "../components/StudentForm";

function Home() {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    const existing =
      JSON.parse(localStorage.getItem("students")) || [];

    const updated = [...existing, student];

    localStorage.setItem(
      "students",
      JSON.stringify(updated)
    );

    setStudents(updated);
  };

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-100 py-10 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Add Student
            </h1>

            <StudentForm addStudent={addStudent} />

            <div className="mt-6 text-center">
              <p className="text-lg font-medium text-gray-700">
                Total Added:
                <span className="ml-2 px-3 py-1 bg-blue-100 text-blue-700 rounded-full font-bold">
                  {students.length}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;