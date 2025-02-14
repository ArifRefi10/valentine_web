function validateDate() {
    var inputDate = document.getElementById('dateInput').value;
    var correctDate = "13-11-2024";
    if (inputDate === correctDate) {
        document.getElementById('login').style.display = 'none';
        document.getElementById('main').classList.remove('hidden');
    } else {
        document.getElementById('errorMsg').style.display = 'block';
    }
}

function openEnvelope() {
    document.getElementById('message').style.display = 'block';
}