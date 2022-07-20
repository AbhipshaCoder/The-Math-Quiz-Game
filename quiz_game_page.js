function send()
{
    number1 = document.getElementById("number_1").value;
    number2 = document.getElementById("number_2").value;
    answer = number1*number2;
    console.log(answer);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>"
    input_box = "<br> Answer: <input type=number id= 'input_check_box'>";
    check_button = "<br><br> <button onclick='check' class='btn btn-info'>Check</button>";
    row = question_number + input_box + check_button;
    
    document.getElementById("output").innerHTML = row;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}