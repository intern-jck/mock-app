import React from 'react'
import {FaCheck} from 'react-icons/fa';
import './StyleSelector.css';

function StyleSelector({styles}) {
  // console.log(styles)
  return (
    <div className="StyleSelector">
      {
        styles.styles.map((style, i) => {
          console.log(style)
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

export default StyleSelector