employee1 = ["Brynlee",22, 0, 5, 0, 0, 0, 0, 0,"22-NoOver"]
employee2 = ["Trey",28, 0, 1, 0, 2, 3, 3, 10,"28-DeadlineLooming"]
employee3 = ["Dagfinn",35, 1, 5, 10, 10, 10, 10, 10,"YngMom-Overwork"]
employee4 = ["Ptah",65, 0, 10, 10, 15, 0, 0, 0,"65 year Passed Deadline"]
employee5 = ["Nomusa",35, 0, 1, 0, 2, 3, 3, 10,"35_Single-DeadlineComplete"]
employee6 = ["Amélia",50, 1, 5, 0, 0, 0, 0, 0,"OlderMom Goes home ontime everyday"]

function init() {
    document.getElementById('employee1').innerHTML = employee1[0];
    document.getElementById('employee2').innerHTML = employee2[0];
    document.getElementById('employee3').innerHTML = employee3[0];
    document.getElementById('employee4').innerHTML = employee4[0];
    document.getElementById('employee5').innerHTML = employee5[0];
    document.getElementById('employee6').innerHTML = employee6[0];
}


window.onload = init;
