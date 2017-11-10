const initialState = {
  modalView: false, // it will show our modal
  view: '',         
  info: { Name: ['None Added'],Address: ['None Added'],Teams:['None Added']} // storing iformation from our modal
}

export default (state = initialState, action) => {
  let modalView;
  let view;
  let info;
  switch(action.type) {
    case 'OPEN_MODAL': 
    modalView = true;
    view = action.payload;
    return {...state, modalView, view};
    case 'CLOSE_MODAL': //sets modalView to be false
    modalView = false;
    return {...state, modalView};
    case 'SAVE_INFO':
      info = Object.create(state.info); //resets state.info
      info[action.payload.name] = action.payload.value; 
      return {...state, info};
    default: 
    return state;
  }
};