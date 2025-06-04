export function authGuard(to, from, next) {
  const token = localStorage.getItem('token')
  if ((to.path === '/login' || to.path === '/register') && token) {
    next({ path: '/' }) 
  } else {
    next()
  }
}