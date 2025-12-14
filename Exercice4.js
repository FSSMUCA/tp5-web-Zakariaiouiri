let min = Number(prompt('Entrer la valeur minimale'));
let max = Number(prompt('Entrer la valeur maximale'));

for (let i = min; i <= max; i++) {
  if (i % 3 == 0 && i % 5 == 0)
    console.log('Five&Three');
  else if (i % 3 == 0)
    console.log('Three');
  else if (i % 5 == 0)
    console.log('Five');
}