
import './App.css';
import Contact from './Components/Contact/Contact';
import ExperienceContainer from './Components/Experiences/ExperienceContainer';
import Header from './Components/Header/Header';
import ProjectContainer from './Components/ProjectContainer/ProjectContainer';
import SkillContainer from './Components/SkillContainer/SkillContainer';
import TopContainer from './Components/TopContainer/TopContainer';

function App() {
  return (
    <div className="App">
<Header/>
<TopContainer/>
<SkillContainer/>
<ProjectContainer/>
<ExperienceContainer/>
<Contact/>
    </div>
  );
}

export default App;
