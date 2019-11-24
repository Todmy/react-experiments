export default (function loadPolyfills() {
  if (typeof window.IntersectionObserver === 'undefined') {
    import('intersection-observer')
  }
})()