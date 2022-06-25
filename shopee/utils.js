const createElement = (className, tagName = 'div') => {
  const newEl = document.createElement(tagName)

  newEl.className = className

  return newEl
}

export const getExistedBubble = () => {
  return document.querySelector('.giamgia-bubble')
}

export const removeGiamgiaBubble = () => {
  const existedBubble = getExistedBubble()

  if (existedBubble) {
    existedBubble.remove()
  }
}

export const createBubble = (textContent, onClick, url) => {
  const wrapperEl = createElement('giamgia-bubble')
  const contentEl = createElement('giamgia-bubble__content', 'a')
  contentEl.textContent = textContent;

  if (url) {
    contentEl.href = url
    contentEl.target = '_blank'
  }

  wrapperEl.appendChild(contentEl)
  wrapperEl.addEventListener('click', onClick)

  return wrapperEl
}

export const updateBubbleUrl = (bubble, newUrl) => {
  const contentEl = bubble.querySelector('.giamgia-bubble__content')

  if (!contentEl) {
    return
  }

  contentEl.href = newUrl
}

export const getGiamgiaURL = () => {
  const newUrl = new URL(window.location.href)

  newUrl.hostname = 'giamgia.to'

  return newUrl.toString()
}

export const PRODUCT_URL_REG = /https?:\/\/shopee\.vn\/[A-Za-z0-9-%]+\.\d+/

export const isProductPageURL = (url) => {
  const prdBrief = document.querySelector('.product-briefing')

  if (prdBrief) {
    return true
  }

  const productPageOverview = document.querySelector('.product-page__overview')

  // on mobile, product-briefing get replaced by product-overview
  if (productPageOverview) {
    return true
  }

  return false
}
