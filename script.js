document.getElementById("load-data").addEventListener("click", function () {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", "https://jsonplaceholder.typicode.com/users", true);
  xhr.onload = function () {
    if (xhr.status === 200) {
      const data = JSON.parse(xhr.responseText);
      const container = document.getElementById("data-container");
      container.innerHTML = "";
      data.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${index + 1}</td>
          <td>${user.name}</td>
          <td>${user.username}</td>
          <td>${user.email}</td>
          <td>${user.phone}</td>
          <td>${user.website}</td>
        `;
        container.appendChild(row);
      });
    } else {
      console.error("Error:", xhr.status);
    }
  };
  xhr.onerror = function () {
    console.error("Request failed.");
  };
  xhr.send();
});
