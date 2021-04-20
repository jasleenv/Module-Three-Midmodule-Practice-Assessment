import React from "react";
import TeacherEnrollment from "./Components/TeacherEnrollment"
import AddToClass from "./Components/AddToClass"
import EnrolledList from "./Components/EnrolledList"
import studentData from "./data/studentData"

class App extends React.Component {
  // constructor(){
  //   super()
  //   this.state={
  //     student:
  //   }

  // }


  render() {
    return (
      <div className="App">
        <>
        <AddToClass studentData={studentData}/>
        <EnrolledList enrolledStudents={studentData}/>
        <TeacherEnrollment/>
        </>

      
      </div>
    );
  }
}

export default App;
