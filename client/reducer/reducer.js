const initialState = {
  modalView: false,
  view: ''
}

export default (state = initialState, action) => {
  let modalView;
  let view;
  switch(action.type) {
    case 'OPEN_MODAL':
    modalView = true;
    if (action.payload === undefined) {
      console.log(action.payload);
      view = '';
    } else {
    view = action.payload;
  }
    return {...state, modalView, view} ;
    case 'CLOSE_MODAL':
    modalView = false;
    return {...state, modalView};
  }
  return state;
};