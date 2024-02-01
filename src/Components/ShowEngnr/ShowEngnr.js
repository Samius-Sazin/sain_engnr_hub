import './ShowEngnr.css'

function ShowEngnr(props) {
  const {picture,profileLink, name, age, degree, cgpa, university, profession, salary, working} = props.engnr;
    
  return (
    <div className='show-engnr'>

      {/* image show */}
      <div>
        <div className='image'>
          <img
            src={picture}
            alt="person img"
          />
        </div>
      </div>
      
      {/* other info */}
      <div className='other-info'>
        <a className='name' href={profileLink} target='_main'>{name} <span>({age})</span></a>
        <p>Degree : {degree}</p>
        <p>CGPA : {cgpa}</p>
        <p>University : {university}</p>
        <p>Profession : {profession}</p>
        <p>Hiring Salary : {salary}</p>
        <p>Working at : {working}</p>
      </div>

      <div className='hire-now-button'>
        <button
          onClick={() => props.handleHireButton(props.engnr)}
        >
        <i class="fa-brands fa-hive"></i> Hire Now</button>
      </div>

    </div>
  )
}

export default ShowEngnr
