import './css/details.css'
import {FaDownload} from 'react-icons/fa'
import Cv from './jesinthkumar.pdf'

const Details = () => {
  return (
    <div className="details">
      <div className='personal-details'>
        <div><span>State :</span><span>Tamilnadu</span></div>
        <div><span>City :</span><span>Madurai</span></div>
        <div><span>Age :</span><span>22</span></div>
      </div>
      <div className='column-ruler'><span></span></div>
      
    
      <div className='skills'>
        <div className='skill-cont'>
          <div className='text-part'>
            <h4>html</h4>
            <h4>100%</h4>
          </div>
          <div className='progressbar'>
            <div className='innerprogress-html'></div>
          </div>
          </div>


          <div className='skill-cont'>
          <div className='text-part'>
            <h4>css</h4>
            <h4>95%</h4>
          </div>
          <div className='progressbar'>
            <div className='innerprogress-css'></div>
          </div>
          </div>


          <div className='skill-cont'>
          <div className='text-part'>
            <h4>JavaScript</h4>
            <h4>90%</h4>
          </div>
          <div className='progressbar'>
            <div className='innerprogress-js'></div>
          </div>
          </div>

          <div className='skill-cont'>
          <div className='text-part'>
            <h4>Java</h4>
            <h4>90%</h4>
          </div>
          <div className='progressbar'>
            <div className='innerprogress-java'></div>
          </div>
          </div>
  
      </div>

      <div className='column-ruler'><span></span></div> 

      <div className='languages'>
        <div className='lang1'>
          <div >100%</div>
          Tamil
        </div>
        <div className='lang1'>
          <div >100%</div>
           English
        </div>
      </div>

      <div className='column-ruler'><span></span></div>

      <div className='download-part'>
        <a href={Cv} download={"Resume"}> 
        Download cv<FaDownload></FaDownload></a>
       
      </div>
      
   
    </div>
  )
}

export default Details