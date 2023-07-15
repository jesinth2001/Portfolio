import "./css/innercontent.css"
import Leftsidebar from "./Leftsidebar"
import Centercontent from "./Centercontent"
import Rightsidebar from "./Rightsidebar"
import Popup from "./Popup"

const Innercontent = () => {
  return (
    <div className="innercontent">
        
        <Leftsidebar></Leftsidebar>
        <Centercontent></Centercontent>
        <Rightsidebar></Rightsidebar>
        <Popup></Popup>
       
    </div>
  )
}

export default Innercontent