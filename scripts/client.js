console.log('JS Sourced');

$(readyNow);

function readyNow() {
    console.log('Jquery Ready');
    $('#salary-submit').click(submit);
}
// DECLARE TOTAL MONTHLY COST ARRAY
let totalSalary = 0;

function submit(){
    console.log('add employee');

    let firstName = $('#first-name').val();
    let lastName = $('#last-name').val();
    let id = $('#id-input').val();
    let title = $('#title-input').val();
    let salary= $('#salary-input').val();

    console.log(firstName + ' ' + lastName);
    
    // IF INPUT FIELDS ARE FILLED IN
    if(
        firstName!=='' &&
        lastName!=='' &&
        id!=='' &&
        title!=='' &&
        salary!==''
    ){
        // APPEND EMPLOYEE DATA TO DOM
        $('#table-data').append(`
        <tr>
                <td>${firstName}</td>
                <td>${lastName}</td>
                <td>${id}</td>
                <td>${title}</td>
                <td>${salary}</td>
                <td>
                    <button>Delete</button>
                </td>
            </tr>
        `);

        // CLEAR INPUT VALUES
        $('#first-name').val('');
        $('#last-name').val('');
        $('#id-input').val('');
        $('#title-input').val('');
        $('#salary-input').val('');

        // ADDS TO TOTAL MONTHLY COST
        totalSalary += Number(salary); //Adds employee salary to total salary count
        totalCost(totalSalary); 
    }
}

function totalCost(salaries){
    let totalMonthly = salaries/12;
    console.log('total monthly cost is ', totalMonthly);

    $('#monthly-cost').empty();
    $('#monthly-cost').append(totalMonthly);
}