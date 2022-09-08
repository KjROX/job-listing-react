import { useState } from "react";
import "./App.css";
import Candidates from "./components/Candidates";
import Skills from "./components/Skills";
import dataArray from "./data/data.json";
// import backgroundHeaderMobile from "./assets/images/bg-header-mobile.svg";

function App() {
  const [skillsArray, setSkillsArray] = useState([]);
  const [visibleArray, setVisibleArray] = useState(dataArray);

  return (
    <div className="app">
      <img
        className="bg-img-mobile"
        src="./images/bg-header-mobile.svg"
        alt=""
      />
      <img
        className="bg-img-desktop"
        src="./images/bg-header-desktop.svg"
        alt=""
      />
      <main>
        {skillsArray.length !== 0 && (
          <Skills
            selectedSkills={skillsArray}
            skillSettingFunction={setSkillsArray}
            CandidateInfosSettingFunction={setVisibleArray}
          />
        )}
        <Candidates
          candidateInfos={visibleArray}
          CandidateInfosSettingFunction={setVisibleArray}
          selectedSkills={skillsArray}
          skillSettingFunction={setSkillsArray}
        />
      </main>
    </div>
  );
}

export default App;
