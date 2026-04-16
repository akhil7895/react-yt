import React from 'react'
import '../index.css'

  

const Card = (props) => {
    // console.log("Name :-",props.name, " Age :- ",props.age);
    
    return (
        <>

                <div className="card">
                    <img src={props.img} alt="" />
                    <h1>{props.name} , {props.age}</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    <button id='btn'>View Profile</button>
                </div>




        </>

    )
}

export default Card
