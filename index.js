// Write your solution in this file!
const driver = new Object

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = { ...driver }
    newDriver[key] = value
    return newDriver
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value
    return driver
}

function deleteFromDriverByKey(driver, key) {
    const driverClone = { ...driver }
    delete driverClone[key]
    return driverClone
}

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key]
    return driver
}