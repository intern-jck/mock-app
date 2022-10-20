import React from 'react'
import {FaCheck} from 'react-icons/fa';
import './StyleSelector.css';

function StyleSelector({styles}) {
  console.log(styles.styles.photos)

  return (
    <div className="StyleSelector">
      {
        styles.styles.map((style, i) => {
          return (
            <div key={i} className='style-div'>
              test
              {/* <img src={style.photos[0]}/> */}
            </div>
          )
        })
      }
    </div>
  );
}

export default StyleSelector