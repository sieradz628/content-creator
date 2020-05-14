import React from "react";

const FullImage = (props) => {
  return(
    <div className="fullImage">
      <h3>Full Image:</h3> 
      <button type="button" className="delete" onClick={() => props.delete(props.id)}>X</button>
      <label>link</label>
      <input type="text" name="FullImage" id={props.id} value={props.el.content.img} onChange={props.update} />
    </div>
  )
}

export default FullImage;


