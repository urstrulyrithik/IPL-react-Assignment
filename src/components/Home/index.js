import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {isLoading: true, teamsData: {}}

  componentDidMount() {
    this.getTeamsData()
  }

  getTeamsData = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const jsonResponse = await response.json()
    const formattedData = jsonResponse.teams.map(each => ({
      name: each.name,
      id: each.id,
      teamImageUrl: each.team_image_url,
    }))

    this.setState({isLoading: false, teamsData: formattedData})
  }

  renderTeamCards = () => {
    const {teamsData} = this.state

    return (
      <div className="ListCont">
        <ul className="teams-list">
          {teamsData.map(eachTeamItem => (
            <TeamCard key={eachTeamItem.id} TeamItemDetails={eachTeamItem} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="mainCont">
        <div className="headingCont">
          <img
            className="iplLogo"
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <div className="teamCardsCont">
          {isLoading ? (
            <div testID="loader">
              <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
            </div>
          ) : (
            this.renderTeamCards()
          )}
        </div>
      </div>
    )
  }
}
export default Home
