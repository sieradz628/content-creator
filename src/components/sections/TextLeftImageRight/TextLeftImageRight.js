import React from "react";

const TextLeftImageRight = (props) => {
  return(
    <div className="textLeftImageRight">
      <h3>Text Left Image Right:</h3> 
      <button type="button" className="delete" onClick={() => props.delete(props.id)}>X</button>
      <div className="content">
        <section>
          <label>title</label>
          <input type="text" name="TextLeftImageRightTitle" id={props.id} value={props.el.content.name} onChange={props.update} />
          <label>text</label>
          <textarea rows="8" type="text" name="TextLeftImageRightText" id={props.id} value={props.el.content.text} onChange={props.update} >Type some text here... </textarea>
        </section>
        <section className="section-image">
          <label>img</label>
          <input type="text" name="TextLeftImageRightImg" id={props.id} value={props.el.content.img} onChange={props.update}  />
        </section>
      </div>
    </div>
  )
}

export default TextLeftImageRight;
