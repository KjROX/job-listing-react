import Candidate from "./Candidate";

const Candidates = (props) => {
  const candidateInfos = props.candidateInfos;
  return (
    <div className="all-candidates">
      {candidateInfos.map((candidateInfo) => {
        return (
          <Candidate
            eachCandidateInfo={candidateInfo}
            key={candidateInfo.id}
            skillsArray={props.selectedSkills}
            setSkillsArray={props.skillSettingFunction}
            setVisibleArray={props.CandidateInfosSettingFunction}
          />
        );
      })}
    </div>
  );
};
export default Candidates;
