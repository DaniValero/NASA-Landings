import React from "react";
import Item from "./Item";
const List = ({list, onRemoveLanding, onRemoveNeas }) => {

  if(list.mass) {
    return(
      <ul>
     {list.map((item) => (
       <Item key={item.id} item={item} onRemoveLanding={() => onRemoveLanding(item)} />
     ))}
    </ul>
    )
  } else {
    return (
      <ul>
      {list.map((item) => (
        <Item key={item.id} item={item} onRemoveNeas={() => onRemoveNeas(item)} />
      ))}
     </ul>  
    )
  }

  // return (
  //   <>
  //   {list[1].mass?
  //   <ul>
  //    {list.map((item) => (
  //      <Item key={item.id} item={item} onRemoveLanding={() => onRemoveLanding(item)} />
  //    ))}
  //   </ul>
  //   :
  //   <ul>
  //    {list.map((item) => (
  //      <Item key={item.id} item={item} onRemoveNeas={() => onRemoveNeas(item)} />
  //    ))}
  //   </ul>  
  //   }
  //   </>
  // );
};

export default List;
