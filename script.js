function calculate() {

    let qb1 = Number(document.getElementById("qb1").value);
    let qb2 = Number(document.getElementById("qb2").value);
    let bjb1 = Number(document.getElementById("bjb1").value);
    let bjb2 = Number(document.getElementById("bjb2").value);
    let tjb = Number(document.getElementById("tjb").value);

    let total = qb1 + qb2 + bjb1 + bjb2 + tjb;

    let grade;

    if (total >= 90) grade = 5;
    else if (total >= 75) grade = 4;
    else if (total >= 50) grade = 3;
    else grade = 2;

    document.getElementById("result").innerHTML =
        "Жалпы балл: " + total + "/100<br>Қорытынды баға: " + grade;
}
