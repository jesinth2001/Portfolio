import './css/home.css'


const arr=[
    {name:"UI/UX design"},
    {name:"Web development"},
    {name:"Backend development"},
    {name:"Frontend development"}]

const work=[
    {name:"E-commerce Website"},
    {name:"Form with Api"},
    {name:"PortFolio"},
    {name:"Simple ChatBot"},
    {name:"Image Gallery"},
]



const Home = () => {
  return (
    <div className="homepage">
         <div className='banner'>
            <div className='headlines'>
      <h1>
      Success is not final,Failure is not fatal
      </h1>

      <h4>
        <span>‹</span>
        <span className='code'>code</span>
        <span>›</span>
         Hello, I am jesinth kumar S
        <span>‹</span>
        <span className='code'>code</span>
        <span>›</span>
      </h4>
               <div className='btn-cont'>
                 <button>Explore Now</button>
                  </div>
      </div>
      <div className="photo-section"></div>
     
      </div>
      <div className='records'>
        <div>
          <span>5+</span>
          months Experience
        </div>

        <div>
          <span>{work.length}</span>
           completed projects
        </div>

        <div>
          <span>0</span>
          Honors and Awards
        </div>

        <div>
          <span>0</span>
          Projects Assigned 
        </div>

        </div>
        
        <section className='service'>my services</section>
        <div className='allservices'>
         {
          arr.map(i=>
            {
              return(<div className='box'>
                <h3>{i.name}</h3>
                <h5>The href attribute requires a valid value to be accessible</h5>
              </div>)
            })
         }
                
        </div>
        <section className='service'>my Works</section>
        <div className='allservices'>
         {
          work.map(i=>
            {
              return(<div className='box'>
                <h3>{i.name}</h3>
                <h5>The href attribute requires a valid value to be accessible</h5>
                <div className="trans-over">
                  <a href={""}>View more</a>
                </div>
              </div>)
            })
         }
                
        </div>

        <section className='service'>skills</section>
        <div className='skillset'>
          <h3><span>✓</span>React js</h3>
          <h3><span>✓</span>Git Knowledge</h3>
          <h3><span>✓</span>Api Knowledge</h3>
          <h3><span>✓</span>Problem Solving</h3>
          <h3><span>✓</span>Aws Iaas (Ec2,S3,codebuild)</h3>
          <h3><span>✓</span>Object Oriented programming</h3>
          

        </div>
      
        
      
    </div>
  )
}

export default Home