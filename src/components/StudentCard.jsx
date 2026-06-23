function StudentCard({ student }) {
  const percentage = student.marks;

  let grade = "F";
  let status = "Fail";

  if (percentage >= 90) {
    grade = "A+";
    status = "Pass";
  } else if (percentage >= 80) {
    grade = "A";
    status = "Pass";
  } else if (percentage >= 70) {
    grade = "B";
    status = "Pass";
  } else if (percentage >= 60) {
    grade = "C";
    status = "Pass";
  }

  const gradeColor =
    grade === "A+"
      ? "bg-green-600"
      : grade === "A"
      ? "bg-blue-600"
      : grade === "B"
      ? "bg-yellow-500"
      : grade === "C"
      ? "bg-orange-500"
      : "bg-red-600";

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition duration-300">
      <h3 className="text-xl font-bold text-gray-800 mb-3">
        {student.name}
      </h3>

      <p className="text-gray-600">
        Total Marks: <span className="font-semibold">{student.marks}</span>
      </p>

      <p className="text-gray-600 mb-3">
        Percentage: <span className="font-semibold">{percentage}%</span>
      </p>

      <span
        className={`inline-block px-3 py-1 text-white text-sm font-semibold rounded-full ${gradeColor}`}
      >
        {grade}
      </span>

      <p
        className={`mt-3 font-bold ${
          status === "Pass" ? "text-green-600" : "text-red-600"
        }`}
      >
        {status}
      </p>

      <div className="w-full bg-gray-200 rounded-full h-3 mt-4 overflow-hidden">
        <div
          className={`h-full rounded-full ${
            status === "Pass" ? "bg-green-500" : "bg-red-500"
          }`}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default StudentCard;