const employee ={
    name: 'Mark',
    streetAddress: 'Main strt'
}
//take in 3 arguments and not mutate the original object
function updateEmployeeWithKeyAndValue(employee, key,value){
    let updatedEmployee ={
        ...employee,
        name: 'Sam',
        streetAddress:"11 Broadway"
    }
    return updatedEmployee;

}
// take in 3 arguments and mutate the original object
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee['name'] = 'Sam',
    employee.streetAddress = "12 Broadway"
    return employee;
}

//deletes non destructively
function deleteFromEmployeeByKey(employee,key){
    let newEmployee = {...employee, };
     delete newEmployee.name;
     return newEmployee;
}

//deletes destructively
function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee.name;
    return employee;
}