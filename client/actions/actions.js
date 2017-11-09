const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';
const SAVE_INFO = 'SAVE_INFO';
export const close = () => {
  return {type: CLOSE_MODAL}
};

export const open = (data) => ({
  type: OPEN_MODAL,
  payload: data
});

export const save = (data) => ({
  type: SAVE_INFO,
  payload: data
})