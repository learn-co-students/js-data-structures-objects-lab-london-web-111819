// Write your solution in this file!
const driver = {};

function updateDriverWithKeyAndValue(object_input, key, value) {
    return Object.assign({}, object_input, { [key]: value });
}

function destructivelyUpdateDriverWithKeyAndValue(object_input, key, value) {
    object_input[key] = value;
    return object_input;
}

function deleteFromDriverByKey(object_input, key) {
    let newObject = Object.assign({}, object_input);
    delete newObject[key];
    return newObject;
}

function destructivelyDeleteFromDriverByKey(object_input, key) {
    delete object_input[key];  
    return object_input;
}
