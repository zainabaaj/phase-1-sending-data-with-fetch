function submitData(name, email) {
    const userData = {
        name: name,
        email: email
    };


    const configurationObject = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify(userData),
    };

    return fetch('http://localhost:3000/users', configurationObject)
        .then(response => response.json())
        .then(data => {
            document.body.innerHTML += `<p>New user ID: ${data.id}</p>`;
        })
        .catch(error => {
            document.body.innerHTML += `<p>Error: ${error.message}</p>`;
        });
}
