import React from 'react';
import './App.css';
import FullImage from './components/sections/FullImage';
import FullText from './components/sections/FullText';
import ImageLeftTextRight from './components/sections/ImageLeftTextRight';
import TextLeftImageRight from './components/sections/TextLeftImageRight';
import './assets/sass/global.scss';

import { connect } from 'react-redux';
import types from './store/types';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      saveJsonBtnErrMessage: '',
      payloadJson: []
    };
  };

  saveJson = () => {
    const element = document.createElement("a");
    const file = new Blob([JSON.stringify(this.props.list)], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = `${this.props.list[0].title}.txt`;
    document.body.appendChild(element);
    element.click();
  };
  toggleLoadJsonBtn = () => {
    this.setState({
      loadJsonBtn: !this.state.loadJsonBtn
    });
  };
  handlePayloadJson = (event) => {
    this.setState({
      payloadJson: event.target.value
    });
  };
  loadFromJsonTxt = (e) => {
    e.preventDefault();
    this.props.loadFromJsonTxt(this.state.payloadJson);
    this.setState({
      loadJsonBtn: !this.state.loadJsonBtn
    });
  };
  getHtml = () => {
    if(JSON.stringify(this.props.list)!=='[]') {
      let html = `<!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>${this.props.list[0].title}</title>
        <style>
          *{margin:0;padding:0}.flex-wrapper{display:flex;flex-direction:column;justify-content:center}.fi{display:flex;justify-content:center;flex:1}.fi>img{max-width:100%}.ft{display:flex;flex-direction:column;justify-content:center;align-items:center}.iltr,.tlir{display:flex;flex-direction:column}.il{order:2;-webkit-order:2}.tr{order:1;-webkit-order:1}.il,.ir,.tl,.tr{flex:1}.il>img,.ir>img{width:100%;display:block}.tl,.tr{display:flex;flex-direction:column;justify-content:center;align-items:center}@media (min-width:768px){.iltr,.tlir{flex-direction:row}.il{order:1;-webkit-order:1}.tr{order:2;-webkit-order:2}}
        </style>
      </head>
      <body>
        <div class="flex-wrapper">`;
      this.props.list.forEach(el => {
        switch(el.name) {
          case "FullImage":
            html+=(`<div class="fi full-image">
                      <img class="full-image_image" src="${el.content.img}" alt="${this.props.list[0].title}">
                    </div>`);
            break;
          case "FullText":
            html+=(`<div class="ft full-text">
                      <h2 class="full-text_h2">${el.content.name}</h2>
                      <p class="full-text_p">${el.content.text}</p>
                    </div>`);
            break;
          case "ImageLeftTextRight":
            html+=(`<div class="iltr image-left-text-right">
                      <div class="il image-left">
                        <img class="image-left-text-right_image" src="${el.content.img}" alt="${this.props.list[0].title}">
                      </div>
                      <div class="tr text-right">
                        <h2 class="image-left-text-right_h2">${el.content.name}</h2>
                        <p class="image-left-text-right_p">${el.content.text}</p>
                      </div>
                    </div>`);
            break;
          case "TextLeftImageRight":
            html+=(`<div class="tlir text-left-image-right">
                      <div class="tl text-left">
                        <h2 class="text-left-image-right_h2">${el.content.name}</h2>
                        <p class="text-left-image-right_p">${el.content.text}</p>
                      </div>
                      <div class="ir image-right">
                        <img class="text-left-image-right_image" src="${el.content.img}" alt="${this.props.list[0].title}">
                      </div>
                    </div>`);
            break;
          default:
            return null;
        };
      });
      html+=`  </div>
      </body>
      </html>`;
      const element = document.createElement("a");
      const file = new Blob([html], {type: 'text/plain'});
      element.href = URL.createObjectURL(file);
      element.download = "index.html";
      document.body.appendChild(element);
      element.click();
    }
  };
  ChangeTitle = (event) => {
    this.setState({
      title: event.target.value
    });
  };
  loadFromJsonFile = (event) => {
    const reader = new FileReader();
    reader.onload = () => {
      this.props.loadFromJsonFile(JSON.parse(reader.result));
    };
    reader.readAsText(event.target.files[0]);
  };

  render() {
    return (
      <div className="App">
        <section className="select">
            <label>Title: </label>
            <input type="text" id="0" name="title" value={this.props.list[0].title} onChange={this.props.updateElement} />
            <label>Select element: </label>
            <select id="component" onChange={this.props.addElement}>
              <option value="Add">Add</option>
              <option value="FullImage">Full image</option>
              <option value="FullText">Full text</option>
              <option value="ImageLeftTextRight">Image left, text right</option>
              <option value="TextLeftImageRight">Text left, image right</option>
            </select>
        </section>
        <section className="component">
          {
            this.props.list.map((el, index) => {
              switch(el.name) {
                case "FullImage":
                  return <FullImage el={el}
                                    id={index}
                                    key={index}
                                    update={this.props.updateElement}
                                    delete={this.props.deleteElement} />
                case "FullText":
                  return <FullText el={el}
                                    id={index}
                                    key={index}
                                    update={this.props.updateElement}
                                    delete={this.props.deleteElement} />
                case "ImageLeftTextRight":
                  return <ImageLeftTextRight el={el}
                                              id={index}
                                              key={index}
                                              update={this.props.updateElement}
                                              delete={this.props.deleteElement} />
                case "TextLeftImageRight":
                  return <TextLeftImageRight el={el}
                                              id={index}
                                              key={index}
                                              update={this.props.updateElement}
                                              delete={this.props.deleteElement} />
                default:
                  return null;
              }
            })
          }
          <section>
            {
              this.state.loadJsonBtn ? 
                <form className="form-load-json" onSubmit={this.loadFromJsonTxt}>
                  <textarea cols="100" rows="6" value={this.state.payloadJson} onChange={this.handlePayloadJson}></textarea> 
                  <button className="form-btn-load" type="submit" disabled={this.state.payloadJson.length<=0}>Load</button>
                </form>
              : ''
            }
            {this.props.list.length>1 && this.props.list[0].title!=='' ? <button className="save-json" onClick={this.saveJson}>Save to JSON</button> : ''}
            <button className="load-json" onClick={this.toggleLoadJsonBtn}>Load from JSON</button>
            {this.props.list.length>1 && this.props.list[0].title!=='' ? <button className="get-html" onClick={this.getHtml}>Get HTML</button> : ''}
            <input type="file" id="input" onChange={this.loadFromJsonFile}/>
          </section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.list
  };
}
const mapDispatchToProps = dispatch => {
  return {
    addElement: (event) => dispatch({type: types.ADD_ELEMENT, payload: {name: event.target.value, content: {name: "", text:"", img: ""}} }),
    updateElement: (event) => dispatch({type: types.UPDATE_ELEMENT, payload: event.target}),
    deleteElement: (id) => dispatch({type: types.DELETE_ELEMENT, id: id}),
    loadFromJsonTxt: (payload) => dispatch({type: types.LOAD_FORM_JSON_TXT, payload: payload}),
    loadFromJsonFile: (payload) => dispatch({type: types.LOAD_FORM_JSON_FILE, payload: payload})
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
