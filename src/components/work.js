import "./workcardstyles.css"
import React from 'react';
import Workcard from "./Workcard";
import WorkCardData from "./workCardData";

const Work = () => {
  return (
    <div className="work-container">
        <h1 className="proejct-heading">Projects</h1>
        <div className="project-container">
            {WorkCardData.map((val,ind)=>{
                return(
                    <Workcard
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    />
                )
            })}
            

        </div>


    </div>
  )
}

export default Work