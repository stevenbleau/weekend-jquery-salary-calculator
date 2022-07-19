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
                    <button class="delete" data-salary="${salary}">Delete</button>
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

         // click event for delete button
        $('.delete').click(deleteEmployee);
    }
}



function totalCost(salaries){
    
    let totalMonthly = salaries/12;
    console.log('total monthly cost is ', totalMonthly);

    $('#monthly-cost').empty();
    $('#monthly-cost').append(totalMonthly);

    if (totalMonthly > 20000){
        $('#total-monthly').css({"color":"rgb(2552, 152, 152)"});
    }

    else{
        $('#total-monthly').css({"color":"rgb(220, 255, 255)"});
    }
}

function deleteEmployee(){
    console.log('delete employee');
    $(this).parent().parent().empty();

    let salary = Number($(this).data('salary'));
    console.log(salary);

    totalSalary -= salary;
    console.log(salary);
    totalCost(totalSalary);
    console.log(totalSalary);
}
