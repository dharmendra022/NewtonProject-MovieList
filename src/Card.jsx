import React from "react";

function Card(props){
    
    return(

    <>
    {/* <div className="cards">
    <div className="card">
        <img src={props.imgsrc} alt="mypic" className="card_img"></img>
        <div className="card_info">
            <span className="card_category">{props.title}</span>
            <h3 className="card_title">{props.sname}</h3>
            <h3 className="card_title1">{props.amount}</h3>

            
        </div>
    </div>

    </div> */}

    <div className="cards">
    <div className="cardMain">
        <div className="card">
        
        <img src={props.imgsrc} alt="mypic" className="card_img" ></img>

        
        <div className="card_info">
        <div className="card_category">{props.title}</div>
        <h3 className="card_title">{props.sname}</h3>
            <h3 className="card_title1">{props.amount}</h3>
        </div>
        </div>
        
        
       
        
    </div>

    </div>
    </>
    );


}
export default Card;