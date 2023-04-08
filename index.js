/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */
function createEmployeeRecord(employeeArray){
    let employee = {
        firstName: employeeArray[0],
        familyName: employeeArray[1],
        title: employeeArray[2],
        payPerHour: employeeArray[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return employee
}

function createEmployeeRecords(nestedEmployeeArray){
    let employeeRecords = nestedEmployeeArray.map(event => createEmployeeRecord(event))
    return employeeRecords;
}

function createTimeInEvent(dateStamp){
    this.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0,10)
    })
    return this
}

function createTimeOutEvent(dateStamp){
    this.timeOutEvents.push({
        type: 'TimeOut',
        hour: parseInt(dateStamp.slice(-4)),
        date: dateStamp.slice(0,10)
    })
    return this
}

function hoursWorkedOnDate(date){
    const timeIn = this.timeInEvents.find(event => event.date === date)
    const timeOut = this.timeOutEvents.find(event => event.date === date)

    const hoursWorkedOnDate = parseInt(timeOut.hour - timeIn.hour)/100

    return hoursWorkedOnDate;
}

function wagesEarnedOnDate(date){
    const payOwed = hoursWorkedOnDate.call(this, date)*this.payPerHour

    return payOwed;
}

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function findEmployeeByFirstName(collection, firstNameString){
    return collection.find(e => e.firstName === firstNameString)
}

function calculatePayroll(employeeRecords){
    const totalPayroll = employeeRecords.reduce((accumulator, employeeRecord) =>{
        return allWagesFor.call(employeeRecord) + accumulator}, 0)
    return totalPayroll;
}