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

// trims a string to a desired length
export const truncate = (str: string, limit = 30) => str.length > limit ? `${str.substring(0, limit)}...` : str;