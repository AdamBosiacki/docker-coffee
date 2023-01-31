function postJSON(nam, des, cof, mil, oth) {
    json = {};
    json.nam = nam;
    json.des = des;
    json.cof = cof;
    json.mil = mil;
    json.oth = oth;
    fetch('http://localhost:8080/addCoffee', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(json)
}).then(response => response.json()).then(window.location="http://localhost:8080").then(fetch("http://localhost:8080/coffee").then((response) => response.json())
.then((data) => {
  data.forEach((coffee) => {
    const cardTemplate = document.querySelector('template');
    const card = cardTemplate.content.cloneNode(true);
    card.querySelector('h4').innerText = coffee.name;
    card.querySelector('p').innerText = coffee.title;
    card.querySelector('p1').innerText = coffee.coffe;
    card.querySelector('p2').innerText = coffee.milk;
    card.querySelector('p3').innerText = coffee.other;
    document.body.appendChild(card);
  });
}));
}