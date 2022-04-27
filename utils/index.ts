// delays an async function
export const delay = async (duration: number = 1000) => {
    return new Promise((res) => {
        setTimeout(()=> {
            res(true)
        }, duration)
    })
}

// debounces a function call
export const debounce = (func: any, timeout = 1000) => {
    let timer: any;
    return (...args: any) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
  }