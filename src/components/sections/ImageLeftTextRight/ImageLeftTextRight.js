import React from "react";

const ImageLeftTextRight = (props) => {
  return(
    <div className="imageLeftTextRight">
      <h3>Image Left Text Right:</h3> 
      <button type="button" className="delete" onClick={() => props.delete(props.id)}>X</button>
      <div className="content">
        <section className="section-image">
          <label>img</label>
          <input type="text" name="ImageLeftTextRightImg" id={props.id} value={props.el.content.img} onChange={props.update} />
        </section>
        <section>
          <label>title</label>
          <input type="text" name="ImageLeftTextRightTitle" id={props.id} value={props.el.content.name} onChange={props.update} />
          <label>text</label>
          <textarea rows="8" type="text" name="ImageLeftTextRightText" id={props.id} value={props.el.content.text} onChange={props.update} >Type some text here... </textarea>
        </section>
      </div>
    </div>
  )
}

export default ImageLeftTextRight;
