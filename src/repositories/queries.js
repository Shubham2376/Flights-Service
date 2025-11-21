function addRowLockOnFlights(flightId){
    return `Select * from flights WHERE flights.id = ${flightId} FOR UPDATE;`
}
module.exports = {
    addRowLockOnFlights
}