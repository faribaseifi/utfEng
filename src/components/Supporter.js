import React,{Component} from 'react';


const Supporter = ({supporter_little_logo}) => {
    return(
      <div className="item">
        <img src={`https://utf.ut.ac.ir/${supporter_little_logo}`} alt="" />
      </div>

    )
  }

export default Supporter;
