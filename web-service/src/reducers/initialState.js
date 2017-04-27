export default {
  auth: localStorage.getItem('msb') ? JSON.parse(localStorage.getItem('msb')) : { isAuthenticated: false },
}