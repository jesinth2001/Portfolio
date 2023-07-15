import './css/leftsidebar.css'
import Profile from './Profile'
import Details from './Details'
import Leftfooter from './Leftfooter'
const Leftsidebar = () => {
  return (
    <div className="leftsidebar">
      <Profile></Profile>
      <Details></Details>
      <Leftfooter></Leftfooter>
    </div>
  )
}

export default Leftsidebar