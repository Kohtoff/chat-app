function debounce(fn, delay){
    let timerID = null
    console.log('PUBLIC');
    return (...args)=> {
        console.log('CLOUSURE');
        clearTimeout(timerID)
        console.log('HERE');
        return new Promise (resolve => {
            timerID = setTimeout(() => {
                console.log('SETTIMEOUT');
                resolve(fn(args))
            }, delay)
        })
    }
}

export default debounce
