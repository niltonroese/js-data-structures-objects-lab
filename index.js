// Write your solution in this file!
let driver = {
    Name: 'Nilton', 
    StreetAddress: '94 Amarina Ave'
}

function updateDriverWithKeyAndValue(driver, key, value) {
    const newDriver = {...driver};
    newDriver[key] = value;
    return newDriver;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
    driver[key] = value;
    return driver;
}

// function deleteFromDriverByKey(driver, key) {
//     const newDriver = {...driver};
//     delete newDriver[key];
//     return newDriver;
// }

let newDriver = Object.assign({}, driver);
    delete newDriver[key];
    newDriver;

function destructivelyDeleteFromDriverByKey(driver, key) {
    delete driver[key];
    return driver;
}