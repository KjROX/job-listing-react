import dataArray from "../assets/data/data.json";
const Skill = (props) => {
  const clickHandler = (e) => {
    const rejectedSkill = e.target.previousElementSibling.textContent;
    props.setSkillsArray((prev) => {
      return prev.filter((element) => element !== rejectedSkill);
    });

    props.setVisibleArray(() => {
      let filteredArray = [...dataArray];
      let skillsArray = [...props.skillsArray];
      skillsArray.splice(skillsArray.indexOf(rejectedSkill), 1);
      skillsArray.forEach((skill) => {
        filteredArray = filteredArray.filter((data) => {
          if (
            data.role === skill ||
            data.level === skill ||
            data.languages.includes(skill) ||
            data.tools.includes(skill)
          ) {
            return true;
          }
        });
      });
      return filteredArray;
    });
  };

  return (
    <div className="element">
      <p>{props.skillName}</p>
      <button onClick={clickHandler}>
        <img src={require("../assets/images/icon-remove.svg")} alt="" />
      </button>
    </div>
  );
};
export default Skill;
