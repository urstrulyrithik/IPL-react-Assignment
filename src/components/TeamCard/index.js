import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const TeamItemDetails = props
  const {name, id, teamImageUrl} = TeamItemDetails
  console.log(teamImageUrl)
  return (
    <li className="teamItem">
      <Link to={`/team-matches/${id}`} className="teamItemLink">
        <div className="itemCont">
          <img src={teamImageUrl} className="teamImage" alt={name} />
          <p className="teamName">{name}</p>
        </div>
      </Link>
    </li>
  )
}
export default TeamCard
