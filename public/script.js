fetch("http://localhost:8080/coffee").then((response) => response.json())
  .then((data) => {
    data.forEach((coffee) => {
      const cardTemplate = document.querySelector('template');
      const card = cardTemplate.content.cloneNode(true);
      card.querySelector('h4').innerText = coffee.name;
      card.querySelector('p').innerText = coffee.title;
      if(coffee.coffe!=''){
      card.querySelector('p1').innerText = 'Coffee - ' + coffee.coffe;
      }else{
      card.querySelector('p1').innerText = 'Coffee isnt used';
      }
      if(coffee.milk!=''){
      card.querySelector('p2').innerText = 'Milk - ' + coffee.milk;
      }else{
      card.querySelector('p2').innerText = 'Milk isnt used';
      }
      if(coffee.other!=''){
        card.querySelector('p3').innerText = coffee.other;
        }else{
        card.querySelector('p3').innerText = '';
        }
      document.body.appendChild(card);
    });
  });



  