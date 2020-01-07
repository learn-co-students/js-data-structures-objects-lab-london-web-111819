// Write your solution in this file!
let driver = {name : 'John'}

function updateDriverWithKeyAndValue (obj, key, value) {
    let newObj = {...obj}

    newObj[key] = value
    return newObj
}

updateDriverWithKeyAndValue(driver)

function destructivelyUpdateDriverWithKeyAndValue(obj, key, value){
    obj[key] = value
    return obj
}

destructivelyUpdateDriverWithKeyAndValue(driver, 'name', 'Tom')

function deleteFromDriverByKey(obj, key){
    let newObj = {...obj}

    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromDriverByKey(obj, key){
    delete obj[key]
    return obj
}

destructivelyDeleteFromDriverByKey(driver,'name')