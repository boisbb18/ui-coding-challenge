const initialState = {
  modalView: false
}

export default (state = initialState, action) => {
  let modalView;
  switch(action.type) {
    case 'OPEN_MODAL':
    modalView = true;
    return {...state, modalView} ;
    case 'CLOSE_MODAL':
    modalView = false;
    return {...state, modalView};
  }
  return state;
};