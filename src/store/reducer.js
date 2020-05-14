import types from './types';

const initialState = {
  list: [
    {title:''}
  ]
};

const reducer = (store = initialState, action) => {
  let tempArray = [];
  switch(action.type) {
    case types.ADD_ELEMENT:
      document.getElementById("component").value='Add';
      return {
        ...store, 
        list: store.list.concat(action.payload)
      }
      case types.UPDATE_ELEMENT:
        tempArray = [...store.list];
            switch(action.payload.name) {
              case "title":
                tempArray[0].title = action.payload.value; 
                break;
              case "FullImage":
                tempArray[action.payload.id].content.img = action.payload.value; 
                tempArray[action.payload.id].content.text = null; 
                tempArray[action.payload.id].content.name = null; 
                break;
              case "FullTextTitle":
                tempArray[action.payload.id].content.img = null; 
                tempArray[action.payload.id].content.name = action.payload.value; 
                break;
              case "FullText":
                tempArray[action.payload.id].content.img = null; 
                tempArray[action.payload.id].content.text = action.payload.value; 
                break;
              case "ImageLeftTextRightTitle":
                tempArray[action.payload.id].content.name = action.payload.value; 
                break;
              case "ImageLeftTextRightImg":
                tempArray[action.payload.id].content.img = action.payload.value; 
                break;
              case "ImageLeftTextRightText":
                tempArray[action.payload.id].content.text = action.payload.value; 
                break;
              case "TextLeftImageRightTitle":
                tempArray[action.payload.id].content.name = action.payload.value; 
                break;
              case "TextLeftImageRightImg":
                tempArray[action.payload.id].content.img = action.payload.value; 
                break;
              case "TextLeftImageRightText":
                tempArray[action.payload.id].content.text = action.payload.value; 
                break;
              default:
                return null;
            };
        return {
          ...store, 
          list: tempArray
        };
    case types.DELETE_ELEMENT:
      tempArray = [...store.list];
      tempArray.splice(action.id, 1);
      return {
        ...store,
        list: tempArray
      };
    case types.LOAD_FORM_JSON_TXT:
      try {
        return {
          ...store, 
          list: JSON.parse(action.payload)
        };
      }
      catch (error) {
        alert("It is not a JSON", error);
      };
      break;
    case types.LOAD_FORM_JSON_FILE:
      try {
        return {
          ...store, 
          list: action.payload
        };
      }
      catch (error) {
        alert("It is not a JSON", error);
      };
      break;
    default:
      return store;
  };
};

export default reducer;
