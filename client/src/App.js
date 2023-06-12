import './App.css';
import Bio from './components/Bio';
import Education from './components/Education';
import SkillsHobbies from './components/skillHobbies';
import Projects from './components/projects';
import Internship from './components/internship';
import NavBars from './components/NavBars';


function App() {
  return (
    <div className="container">
      <br/>
      <NavBars/>
      <br/>
      <Bio/>
      <Education/>
      <Internship/>
      <Projects/>
      <SkillsHobbies/>
    </div>
  );
  }

export default App;
