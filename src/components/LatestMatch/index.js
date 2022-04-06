import './index.css'

const LatestMatch = props => {
  const {latestMatchDetails} = props
  const updatedDetails = {
    umpires: latestMatchDetails.umpires,
    result: latestMatchDetails.result,
    manOfTheMatch: latestMatchDetails.man_of_the_match,
    date: latestMatchDetails.date,
    venue: latestMatchDetails.venue,
    competingTeam: latestMatchDetails.competing_team,
    competingTeamLogo: latestMatchDetails.competing_team_logo,
    firstInnings: latestMatchDetails.first_innings,
    secondInnings: latestMatchDetails.second_innings,
    matchStatus: latestMatchDetails.match_status,
  }

  const altImg = `latest match ${updatedDetails.competingTeam}`

  return (
    <div className="mainCont">
      <p className="latestMatches">Latest Matches</p>
      <div className="latestMatchCont">
        <div className="leftDiv">
          <p className="teamName">{updatedDetails.competingTeam}</p>
          <p className="date">{updatedDetails.date}</p>
          <p className="venue">{updatedDetails.venue}</p>
          <p className="result">{updatedDetails.result}</p>
        </div>
        <img
          className="logo"
          alt={altImg}
          src={updatedDetails.competingTeamLogo}
        />
        <div className="rightDiv">
          <p className="innings">First Innings</p>
          <p className="teamName">{updatedDetails.firstInnings}</p>
          <p className="innings">Second Innings</p>
          <p className="teamName">{updatedDetails.secondInnings}</p>
          <p className="mom">Man Of The Match</p>
          <p className="momName">{updatedDetails.manOfTheMatch}</p>
          <p className="umpires">Umpires</p>
          <p className="umpiresName">{updatedDetails.umpires}</p>
        </div>
      </div>
    </div>
  )
}
export default LatestMatch
