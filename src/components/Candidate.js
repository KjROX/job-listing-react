const Candidate = (props) => {
  const { eachCandidateInfo } = props;

  const clickHandler = (e) => {
    const selectedSkill = e.target.innerText;
    if (props.skillsArray.indexOf(selectedSkill) === -1) {
      props.setSkillsArray((current) => [...current, selectedSkill]);
    }

    props.setVisibleArray((current) => {
      return current.filter((eachObject) => {
        if (
          eachObject.role === selectedSkill ||
          eachObject.level === selectedSkill ||
          eachObject.languages.includes(selectedSkill) ||
          eachObject.tools.includes(selectedSkill)
        ) {
          return true;
        }
      });
    });
  };

  return (
    <section
      className={`candidate ${eachCandidateInfo.company.replace(
        /\s/g,
        ""
      )}-section}`}
    >
      <div className={`${eachCandidateInfo.company}-profile profile`}>
        <img src={eachCandidateInfo.logo} alt="" />
        <div className={`${eachCandidateInfo.company}-description description`}>
          <div className="name">
            <h6>{eachCandidateInfo.company}</h6>
            {eachCandidateInfo.new && <p>NEW!</p>}
            {eachCandidateInfo.featured && <span>FEATURED</span>}
          </div>
          <h3>{eachCandidateInfo.position}</h3>
          <div className="time">
            <p>{eachCandidateInfo.postedAt}</p>
            <span>.</span>
            <p>{eachCandidateInfo.contract}</p>
            <span>.</span>
            <p>{eachCandidateInfo.location}</p>
          </div>
        </div>
      </div>
      <div className={`${eachCandidateInfo.company}-skills skills`}>
        <h4 onClick={clickHandler}>{eachCandidateInfo.role}</h4>
        <h4 onClick={clickHandler}>{eachCandidateInfo.level}</h4>
        {eachCandidateInfo.languages.length &&
          eachCandidateInfo.languages.map((language, index) => (
            <h4 key={`${index}`} onClick={clickHandler}>
              {language}
            </h4>
          ))}
      </div>
    </section>
  );
};
export default Candidate;
