const initialState = {
  modalView: false,
  view: '',
  info: { Name: ['None Added'],Address: ['None Added'],Teams:['None Added']}
}

export default (state = initialState, action) => {
  let modalView;
  let view;
  let info;
  switch(action.type) {
    case 'OPEN_MODAL':
    modalView = true;
    view = action.payload;
    return {...state, modalView, view} ;
    case 'CLOSE_MODAL':
    modalView = false;
    return {...state, modalView};
    case 'SAVE_INFO':
      info = Object.create(state.info);
      info[action.payload.name] = action.payload.value; 
      return {...state, info};
    default: 
    return state;
  }
};