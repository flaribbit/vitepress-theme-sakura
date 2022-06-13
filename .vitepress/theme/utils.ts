export function throttleAndDebounce(fn: () => void, delay: number): () => void {
  let timeout: number
  let called = false
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}

export function addScript(url: string, callback?: () => void) {
  let el = document.querySelector<HTMLScriptElement>('script[src="' + url + '"]');
  if (el) {
    console.log('script ' + url + ' already exists');
    if (callback) el.onload = callback;
  } else {
    el = document.createElement('script');
    el.src = url;
    if (callback) el.onload = callback;
    document.head.appendChild(el);
  }
}

export function addStyle(url: string, callback?: () => void) {
  let el = document.querySelector<HTMLLinkElement>('link[href="' + url + '"]');
  if (el) {
    console.log('link ' + url + ' already exists');
    if (callback) el.onload = callback;
  } else {
    el = document.createElement('link');
    el.rel = 'stylesheet';
    el.href = url;
    document.head.appendChild(el);
  }
}
