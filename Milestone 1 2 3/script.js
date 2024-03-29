/*
Milestone 1
Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, 
in cui è presente il nome dell'icona e l'icona stessa.
Milestone 2
Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
Milestone 3
Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). 
Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
*/

const playIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

console.log(playIcons);


//MILESTONE 1 E 2


const iconContainer = document.getElementById('icon-container');

  playIcons.forEach(icon => {
	const iconBox = document.createElement('div');
	iconBox.className = 'box';

	const iconElement = document.createElement('i');
	iconElement.className = `${icon.family} ${icon.prefix}${icon.name} icon`;
	iconElement.style.color = icon.color;

	const iconText = document.createElement('h6');
	iconText.textContent = icon.name;
	iconText.style.color = icon.color;

	iconBox.appendChild(iconElement);
	iconBox.appendChild(iconText);

	iconContainer.appendChild(iconBox);

	console.log(iconBox);
  });
  

//MILESTONE 3


const select = document.getElementById("icontype");

select.addEventListener("change", function () {
	console.log("Valore selezionato:", select.value);
	const selectedType = select.value;
	// Codice per cancellare le icone 
	iconContainer.innerHTML = '';

	playIcons.forEach(icon => {
		if (selectedType === 'all' || icon.type === selectedType) {
		  const iconBox = document.createElement('div');
		  iconBox.className = 'box';
	 
		  const iconElement = document.createElement('i');
		  iconElement.className = `${icon.family} ${icon.prefix}${icon.name} icon`;
		  iconElement.style.color = icon.color;
	 
		  const iconText = document.createElement('h6');
		  iconText.textContent = icon.name;
	 
		  iconBox.appendChild(iconElement);
		  iconBox.appendChild(iconText);
	 
		  iconContainer.appendChild(iconBox);
		}
	  });

});

