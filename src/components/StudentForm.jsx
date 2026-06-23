import { useState } from "react";

function StudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [marks, setMarks] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !marks) return;

    addStudent({
      id: Date.now(),
      name,
      marks: Number(marks),
    });

    setName("");
    setMarks("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md flex flex-col md:flex-row gap-4 items-center"
    >
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full md:flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <input
        type="number"
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
        className="w-full md:w-40 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      <button
        type="submit"
        className="w-full md:w-auto px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-200"
      >
        Add Student
      </button>
    </form>
  );
}

export default StudentForm;