module.exports = {
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      if (to.hash && document.querySelector(to.hash)) {
        return {
          selector: to.hash
        }
      }
      // if the returned position is falsy or an empty object,
      // will retain current scroll position.
      return false
    }
  }
}
