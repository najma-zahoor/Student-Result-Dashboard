import { useMemo } from "react";
import Navbar from "../components/Navbar";
import StudentCard from "../components/StudentCard";

function Result() {
  const students = JSON.parse(localStorage.getItem("students")) || [];

  const average = useMemo(() => {
    if (!students.length) return 0;
    return (
      students.reduce((sum, student) => sum + student.marks, 0) / students.length
    );
  }, [students]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Student Results</h1>
            <p className="text-sm text-gray-500 mt-1">Overview of all student records and performances.</p>
          </div>
          
          <div className="bg-indigo-50 px-6 py-4 rounded-xl border border-indigo-100">
            <h3 className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">Average Marks</h3>
            <p className="text-3xl font-bold text-indigo-900 mt-1">
              {average.toFixed(2)}
            </p>
          </div>
        </header>

        {/* Grid Section */}
        {students.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {students.map((student) => (
              <StudentCard key={student.id} student={student} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-2xl shadow-sm border border-gray-100">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-900">No students found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Get started by adding students to your system.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}

export default Result;
