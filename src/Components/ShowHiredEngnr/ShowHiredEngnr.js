import './ShowHiredEngnr.css';

function ShowHiredEngnr(props) {
  return (
    <div className='eachHiredEngnr'>
        <div className='Image'>
            <img 
                src={props.eachHired.picture}
                alt='engnr_img'
            />
        </div>

        <div className='OtherInfo'>
            <p>{props.eachHired.name}</p>
            <p>${props.eachHired.salary}</p>
        </div>

        <div className='cancel'>
            <button><i class="fa-solid fa-xmark"></i></button>
        </div>
        
    </div>
  )
}

export default ShowHiredEngnr
