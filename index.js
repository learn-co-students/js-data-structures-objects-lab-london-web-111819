// Write your solution in this file!
let driver = {
    name: 'Name', 
    address: 'Address'
};

function updateDriverWithKeyAndValue(driver, key, value){
    let newDriver = {...driver}; //the triple dots 

    newDriver[key] = value;

    return newDriver;

}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value){
    driver[key] = value;

    return driver;

}

function deleteFromDriverByKey(driver, key){

    let newDriver = Object.assign({}, driver);
    
    delete newDriver[key]; 

    return newDriver;

}

function destructivelyDeleteFromDriverByKey(driver, key){

    delete driver[key];

    return driver;
    

}


document.addEventListener('DOMContentLoaded', function() {
    console.log("This starts the js once the DOM content is loaded")
})
