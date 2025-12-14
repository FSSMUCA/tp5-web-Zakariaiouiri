let num = Number(prompt('Enter votre nombre :'));

if (num < 0)
  console.log('Nombre est negative');
else if (num < 10)
  console.log('Nombre est petit');
else if (num < 50)
  console.log('Nombre est moyen');
else if (num < 100)
  console.log('Nombre est grand');
else
  console.log('Nombre est tres grand');



