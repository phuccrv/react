import "./style.css";
import "./App.css";
import React, { useState } from "react";
import Control from "./Components/control";
import List from "./Components/list";
import Form from "./Components/form";

function App() {
  // ẩn hiện form nhập thêm sinh viên
  const [showForm, setShowForm] = useState(false);
  const handleShowForm = () => {
    setShowForm(true);
  };
  // thêm sinh viên vào list
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };
//  xoá sinh viên trong list
const removeStudent = (index) => {
  setStudents(students.filter((_, i) => i !== index));
};

// chức năng tìm kiếm sinh viên
const searchStudents = (query) => {
  const results = students.filter((student) => {
    return (
      student.name.toLowerCase().includes(query.toLowerCase()) ||
      student.msv.toLowerCase().includes(query.toLowerCase())
    );
  });
  setStudents(results);
  console.log("Kết quả tìm kiếm:", results);
};

// chức năng sửa sinh viên




  return (
    <div className="row p-5">
      <div className="col-lg-7 grid-margin stretch-card">
        <div className="card">
          <Control showForm={handleShowForm} searchStudents={searchStudents}/>
          <List students={students} removeStudent={removeStudent}/>
        </div>
      </div>
      {showForm && <Form addStudent={addStudent}/>}
    </div>
  );
}


export default App;
