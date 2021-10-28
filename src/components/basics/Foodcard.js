import React from 'react'
import Menu from './menuApi'
import "./style.css"

const Foodcard = ({MenuData}) => {
    return (
        <>

        {
          MenuData.map((curElement)=>{
            return(

            <div className="container-card" key={curElement.id}>
          <div className="card-number" >
            <h4>{curElement.id}</h4>
          </div>
          <div className="title">
            <h2>{curElement.name}</h2>
            <h4>{curElement.category}</h4>
          </div>
          <div className="img" >
            <img src={curElement.image} alt="image" id=""/>
          </div>
          <div className="discription" descripton="">
            <p>{curElement.description}</p>
          </div>
          <div className="price" id="price"><span>Price : $</span> {curElement.price}</div>
          <div className="but">
            <button>Order</button>
          </div>
        </div>
            )

          })
        }
            
        
    
        </>
    )
}

export default Foodcard
