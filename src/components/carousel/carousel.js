export function nextCarouselCert() {
    const carousel = document.getElementsByClassName('carousel')[0]
    const carousel_content = document.getElementsByClassName('carousel_content')[0]

    const count = carousel_content.childElementCount

    const carousel_style = getComputedStyle(carousel)
    const content_style = getComputedStyle(carousel_content)

    const width = parseInt(carousel_style.width)
    const step = 400
    const jump = parseInt(content_style.left)
    if ((step * count) + jump === width)
    {
        carousel_content.style.left = 0 + 'px'
    } else if ((step * count) + jump - step < width)
    {
        carousel_content.style.left = width - (step * count)  + 'px'
    } else {
        carousel_content.style.left = (jump - step) + 'px'
    }
}

export function prevCarouselCert() {
    const carousel = document.getElementsByClassName('carousel')[0]
    const carousel_content = document.getElementsByClassName('carousel_content')[0]

    const count = carousel_content.childElementCount

    const carousel_style = getComputedStyle(carousel)
    const content_style = getComputedStyle(carousel_content)

    const width = parseInt(carousel_style.width)
    const step = 400
    const jump = parseInt(content_style.left)
    if (jump === 0)
    {
        carousel_content.style.left = width - (step * count)  + 'px'
    } else if (jump + step > 0)
    {
        carousel_content.style.left = 0  + 'px'
    } else {
        carousel_content.style.left = (jump + step) + 'px'
    }
}
