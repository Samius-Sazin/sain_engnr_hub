import React, { useEffect, useState } from 'react';
import './LoadEngnr.css';
import ShowEngnr from '../ShowEngnr/ShowEngnr';
import SelectionArea from '../SelectionArea/SelectionArea';

function LoadEngnr() {
    const [engnrs, setEngnrs] = useState([]);
    const [hired, setHired] = useState([]);
    const [searchedEngnr, setSearchedEngnr] = useState([]);

    useEffect(() => {
        fetch('/engnrData.json')
        .then(res => res.json())
        .then(data => {
          setEngnrs(data);
          setSearchedEngnr(data);
        });
    }, [])

    const handleHireButton = (engnr) => {
      let found = 0;
      for(let element of hired){
        if(element.serialNumber === engnr.serialNumber){
          found = 1;
        }
      }
      if(!found){
        const updateSelectionArea = [...hired, engnr];
        setHired(updateSelectionArea);
      }
    }

    const showSearchedItem = (e) => {
      const searchedEngnrFromSearchBox = engnrs.filter(engnr => ((engnr.name).toLowerCase().includes(e.target.value.toLowerCase())) || ((engnr.university).toLowerCase().includes(e.target.value.toLowerCase())) || ((engnr.profession).toLowerCase().includes(e.target.value.toLowerCase())) || ((engnr.working).toLowerCase().includes(e.target.value.toLowerCase())));
      
      setSearchedEngnr(searchedEngnrFromSearchBox);
    }

  return (
    <>
    {/* search box */}
      <div className='InputArea'>
        <input
          onChange={showSearchedItem}
          className='searchBox'
          type='text'
          placeholder='Search here'
        >
        </input>
      </div>

      {/* engnr display area */}
      <div className='engnr_selectionArea'>
        <div className='engnrsContainer'>
          {
            searchedEngnr.map(engnr =>
              <ShowEngnr
                key={engnr.serialNumber}
                engnr={engnr}
                handleHireButton={handleHireButton}
            />)
          }
        </div>

        {/* selecttion area */}
        <div className='selectionArea'>
          <SelectionArea hired={hired}/>
        </div>
      </div>
    </>
  )
}

export default LoadEngnr
