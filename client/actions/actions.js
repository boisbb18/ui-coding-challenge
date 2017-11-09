const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

export const close = () => ({
  type: CLOSE_MODAL
});

export const open = (data) => ({
  type: OPEN_MODAL,
  payload: data
});
