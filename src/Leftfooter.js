import './css/leftfooter.css'
import {FaLinkedinIn} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebookSquare} from "react-icons/fa"
import {FaInstagram} from "react-icons/fa"
const Leftfooter = () => {
  return (
    <div className="leftfooter">
    <a href='https://www.linkedin.com/in/jesinth-kumar-8a2139264/' target='1'><FaLinkedinIn></FaLinkedinIn></a>
    <a href='#'><FaGithub></FaGithub></a>
    <a href='#'><FaFacebookSquare></FaFacebookSquare></a>
    <a href='#'><FaInstagram></FaInstagram></a>

    </div>
  )
}

export default Leftfooter