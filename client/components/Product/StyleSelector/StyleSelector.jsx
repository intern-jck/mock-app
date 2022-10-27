import React from 'react';
import {FaCheck} from 'react-icons/fa';
import './StyleSelector.css';

function StyleSelector({styles}) {
  return (
    <div className="StyleSelector">
      {
        styles.styles.map((style, i) => {
          return (
            <div key={i} className='style-div'>
              <img src={style.photos[0].url}/>
            </div>
          )
        })
      }
    </div>
  );
}

export default StyleSelector;
