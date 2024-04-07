import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import PersonalInfo from "./components/personalInfo"; // Corrected filename
import Education from "./components/EducationalBackground"; // Added file extension
import Projects from "./components/Projects";
import WorkExperience from "./components/workExperience";
const App = () => {
  return (
    <div style={{backgroundColor: "#161616"}}>
      <Navbar />
      <PersonalInfo />
      <h2  style={{ textAlign: 'center' , color:'white'}}>Educational Background</h2>
      <Education />
      <h2  style={{ textAlign: 'center', color:'white'}}>Projects</h2>
      <Projects />
      <WorkExperience /> 
    </div>
  );
}; 

export default App;
