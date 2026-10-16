
const patients = [];
let nextToken = 1;

const form = document.getElementById("patientForm");
const patientList = document.getElementById("patientList");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = Number(document.getElementById("age").value);
    const problem = document.getElementById("problem").value.trim();

    if (!name || !problem || age < 0 || age > 120 ||
        document.getElementById("age").value === "") {
        message.textContent = "Please enter valid patient details.";
        return;
    }

    const patient = {
        token: nextToken,
        name: name,
        age: age,
        problem: problem
    };

    patients.push(patient);
    nextToken++;

    const card = document.createElement("div");
    card.className = "patient-card";

    const details = document.createElement("p");
    details.textContent =
        "Token: " + patient.token +
        " | Name: " + patient.name +
        " | Age: " + patient.age +
        " | Problem: " + patient.problem;

    card.appendChild(details);
    patientList.appendChild(card);

    message.textContent =
        "Registration successful! Token: " + patient.token;

    form.reset();

    console.log(patients);
});
