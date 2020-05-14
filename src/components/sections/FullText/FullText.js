import React from 'react';

const FullText = (props) => {
  return(
    <div className="fullText">
      <h3>Full Text:</h3> 
      <button type="button" className="delete" onClick={() => props.delete(props.id)}>X</button>
      <label>title</label>
      <input type="text" name="FullTextTitle" id={props.id} value={props.el.content.name} onChange={props.update} />
      <label>text</label>
      <textarea rows="8"type="text" name="FullText" id={props.id} value={props.el.content.text}  onChange={props.update} >Type some text here... </textarea>
    </div>
  )
}

export default FullText;
