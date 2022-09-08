import Skill from "./Skill";
import dataArray from "../data/data.json";
const Skills = (props) => {
  const clickHandler = () => {
    props.skillSettingFunction([]);
    props.CandidateInfosSettingFunction(dataArray);
  };

  return (
    <div className="selection">
      <div className="allSkills">
        {props.selectedSkills.map((eachSelectedSkill, index) => (
          <Skill
            skillName={eachSelectedSkill}
            skillsArray={props.selectedSkills}
            setSkillsArray={props.skillSettingFunction}
            setVisibleArray={props.CandidateInfosSettingFunction}
            key={index}
          />
        ))}
      </div>
      <span onClick={clickHandler}>Clear</span>
    </div>
  );
};
export default Skills;
