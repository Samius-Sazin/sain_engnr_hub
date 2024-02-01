import ShowHiredEngnr from '../ShowHiredEngnr/ShowHiredEngnr';
import './SelectionArea.css';

function SelectionArea(props) {
    const totalSelected = props.hired.length;
    let hiringCost = 0;

    // calculating total hiring cost
    for(let eachHired of props.hired){
      hiringCost = hiringCost + parseInt(eachHired.salary);
    }

  return (
    <div className='selection-area'>
      <h2 className='total-selected'>Total Selected : {totalSelected}</h2>
      <h3 className='hiring-cost'>Hiring Cost : ${hiringCost}</h3>

      <div className='hired-engnr'>
        {
          props.hired.map(eachHired =>
            <ShowHiredEngnr
              eachHired={eachHired}
            />)
        }
      </div>
    </div>
  )
}

export default SelectionArea
