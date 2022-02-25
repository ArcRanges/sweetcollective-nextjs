export const delay = async (duration: number = 1000) => {
    return new Promise((res) => {
        setTimeout(()=> {
            res(true)
        }, duration)
    })
}