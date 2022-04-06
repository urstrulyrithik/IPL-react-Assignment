import './index.css'

const MatchCard = props => {
  const {eachMatchDetails} = props
  const updatedMatchDetails = {
    umpires: eachMatchDetails.umpires,
    result: eachMatchDetails.result,
    manOfTheMatch: eachMatchDetails.man_of_the_match,
    id: eachMatchDetails.id,
    date: eachMatchDetails.date,
    venue: eachMatchDetails.venue,
    competingTeam: eachMatchDetails.competing_team,
    competingTeamLogo: eachMatchDetails.competing_team_logo,
    firstInnings: eachMatchDetails.first_innings,
    secondInnings: eachMatchDetails.second_innings,
    matchStatus: eachMatchDetails.match_status,
  }
  const altImg = `competing team ${updatedMatchDetails.competingTeam}`
  return (
    <li className="listItem">
      <div className="mainCont">
        <img
          src={updatedMatchDetails.competingTeamLogo}
          alt={altImg}
          className="teamLogo"
        />
        <p className="teamName">{updatedMatchDetails.competingTeam}</p>
        <p className="status">{updatedMatchDetails.result}</p>
        <p className="result">{updatedMatchDetails.matchStatus}</p>
      </div>
    </li>
  )
}

export default MatchCard
