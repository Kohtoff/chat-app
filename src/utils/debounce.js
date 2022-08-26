function debounce(fn, delay){
    let timerID = null
    return (...args)=> {
        clearTimeout(timerID)
        return new Promise (resolve => {
            timerID = setTimeout(() => {
                resolve(fn(args))
            }, delay)
        })
    }
}

export default debounce
