/**
 * Traverses an element's offsetParent up to the top of the DOM to
 * get the "absolute" offset, also taking into account any
 */
function getElOffset(el: any, dir: 'top' | 'right' | 'bottom' | 'left') {
  let offset = 0;

  do {
    let currOffset = 0;

    switch (dir) {
      case 'top':
        currOffset = el.offsetTop - el.scrollTop;
        break;
      case 'right':
        if (el.offsetParent) {
          currOffset =
            el.offsetParent.offsetWidth - el.offsetLeft - el.offsetWidth;
        }
        break;
      case 'bottom':
        if (el.offsetParent) {
          currOffset =
            el.offsetParent.offsetHeight - el.offsetTop - el.offsetHeight;
        }
        break;
      case 'left':
        currOffset = el.offsetLeft - el.scrollLeft;
        break;
    }

    if (!isNaN(currOffset)) {
      offset += currOffset;
    }

    // eslint-disable-next-line
  } while ((el = el.offsetParent));

  return offset;
}

export default getElOffset;
