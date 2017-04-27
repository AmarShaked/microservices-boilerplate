export default (store) => {
  store.subscribe(() => {
    const auth = JSON.stringify(store.getState().auth);
    localStorage.setItem('msb', auth);
  })
}