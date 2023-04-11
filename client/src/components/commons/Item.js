import React, { Fragment } from "react";

const Item = ({ item, onRemoveLanding, onRemoveNeas }) => {
  return (
    <>
      <div>
      
      {item.name? 
      
      <li className="item">
      {item.name}, {item.mass} toneladas, clase {item.recclass} <button onClick={onRemoveLanding}>X</button><button>Editar</button>
      </li> 
      : 
      <li className="item">
      {item.designation}, órbita {item.orbit_class}, Pha {item.pha} <button onClick={onRemoveNeas}>X</button><button>Editar</button>
      </li> }
      
      </div>
      
    </>
        
    
    
    
  );
};

export default Item;