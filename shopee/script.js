import { createBubble, getExistedBubble, getGiamgiaURL, isProductPageURL, PRODUCT_URL_REG, removeGiamgiaBubble, updateBubbleUrl } from "./utils.js"

document.addEventListener('readystatechange', (e) => {
  if (document.readyState === 'complete') {
    reactToPageChange(onPageChange)
  }
})

const injectGiamgiaBubble = () => {
  const url = getGiamgiaURL()

  const existedBubble = getExistedBubble()

  if (existedBubble) {
    updateBubbleUrl(existedBubble, url)
    return
  }

  const bubble = createBubble('More voucher', () => {
    window.open(url, '_blank')
  }, url)

  document.body.appendChild(bubble)
}

const onPageChange = () => {
  if (isProductPageURL(window.location.href)) {
    injectGiamgiaBubble()
  } else {
    removeGiamgiaBubble()
  }
}

const reactToPageChange = (cb) => {
  const observer = new MutationObserver(cb)

  // main for desktop, app for mobile
  const observedEl = document.querySelector('#main') || document.querySelector('#app')
  
  if (!observedEl) {
    return false
  }

  observer.observe(observedEl, { childList: true, subtree: true })

  return true
}
