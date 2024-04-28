function dateCalculation(date){
    let nowDate = new Date(Date.now())
    date = new Date(date)
    let day
    let displayDate
    if (nowDate.getDate() == date.getDate()) {
        if (nowDate.getMonth() == date.getMonth() && nowDate.getFullYear() == date.getFullYear()) {
            displayDate = 'Today'
        }
    }
    else if (nowDate.getDate() == date.getDate() + 1) {
        if (nowDate.getMonth() == date.getMonth() && nowDate.getFullYear() == date.getFullYear()) {
            displayDate = 'Yesterday'
        }
    }
    else {
        displayDate =  date.toLocaleDateString()
    }
    displayDate = displayDate.concat(' , ' + date.getHours() + ':' + date.getMinutes())
    return displayDate
}
export default dateCalculation