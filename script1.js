function addStudent() {
    const name = document.getElementById('studentName').value;
    const formative = parseFloat(document.getElementById('formative').value);
    const sor = parseFloat(document.getElementById('sor').value);
    const soch = parseFloat(document.getElementById('soch').value);

    if (name === "" || isNaN(formative) || isNaN(sor) || isNaN(soch)) {
        alert("Барлық жолақты дұрыс толтырыңыз!");
        return;
    }

    // 100 баллдық жүйе формуласы:
    // ФБ - 50%, БЖБ - 25%, ТЖБ - 25%
    const finalScore = (formative * 0.5) + (sor * 0.25) + (soch * 0.25);
    
    let grade = "";
    let color = "";

    if (finalScore >= 85) { grade = "5 (Өте жақсы)"; color = "#2ecc71"; }
    else if (finalScore >= 65) { grade = "4 (Жақсы)"; color = "#f1c40f"; }
    else if (finalScore >= 40) { grade = "3 (Қанағат)"; color = "#e67e22"; }
    else { grade = "2 (Төмен)"; color = "#e74c3c"; }

    const tableBody = document.getElementById('tableBody');
    const row = `
        <tr>
            <td>**${name}**</td>
            <td>${formative}</td>
            <td>${sor}</td>
            <td>${soch}</td>
            <td><strong>${finalScore.toFixed(1)}</strong></td>
            <td><span class="grade-badge" style="background:${color}">${grade}</span></td>
        </tr>
    `;
    
    tableBody.innerHTML += row;

    // Форманы тазарту
    document.getElementById('studentName').value = "";
}
