import React,{Component} from 'react';

const Supporter = ({supporter_little_logo,supporter_name}) => {
    return(
    <div className="item">
        <img src={`https://utf.ut.ac.ir/${supporter_little_logo}`} alt="" />
          <p>{supporter_name}</p>
      </div>

    )
  };

export default Supporter;
