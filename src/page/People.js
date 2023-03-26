import React from 'react';
import "../App.css"

const People = (props) => {
    const { id, itemInfo } = props.data;
   return (
     <div key={id} >
       <div className="Shop_container">
         <div className="Shop_wrapper">
           <div className="Shop_image">
             <img src={itemInfo.itemImg[0]} alt="phone" />
           </div>
           <div className="Shop_text">
             <h3>{itemInfo.name}</h3>
             <p>{itemInfo.description1}</p>
           </div>
           <div className="Shop_price">
             <h3>${itemInfo.newItemPrice}</h3>
           </div>
         </div>
       </div>
     </div>
   );
}

export default People