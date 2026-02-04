let add = (amount,unit)=>{
    let myDate = Date.now();
    let newDate = 0;
    switch (unit) {
        case 'seconds':
            newDate = myDate + (amount * 1000)
            break;
        case 'minutes':
            newDate = myDate + (amount * 60 * 1000)
            break;
        case 'hours':
            newDate = myDate + (amount * 60 * 60 * 1000)
            break;
        case 'days':
            newDate = myDate + (amount * 24 * 60 * 60 * 1000)
            break;
        case 'weeks':
            newDate = myDate + (amount * 7 * 24 * 60 * 60 * 1000)
            break;
        case 'months':
            newDate = (amount * 30 * 24 * 60 * 60 * 1000)
            break;
    }
    const newTime = newDate + myDate
    return new Date(newTime)
}
console.log(add(25,'months'));