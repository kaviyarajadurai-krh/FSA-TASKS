document.getElementById("studentForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formData = {
        name: document.querySelector('input[name="name"]').value,
        email: document.querySelector('input[name="email"]').value,
        dob: document.querySelector('input[name="dob"]').value,
        department: document.querySelector('input[name="department"]').value,
        phone: document.querySelector('input[name="phone"]').value
    };

    fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
    })
    .then(res => res.text())
    .then(data => {
        alert(data);
        document.getElementById("studentForm").reset();
    });
});