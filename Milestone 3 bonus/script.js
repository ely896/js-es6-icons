/*
Milestone 3
BONUS
1 - modificare la struttura dati fornita e valorizzare la proprietà "color" in modo dinamico: generare in modo 
casuale un codice colore, sapendo che la notazione esadecimale è formata dal simbolo "#" seguito da 6 caratteri 
alfanumerici compresi tra 0 e 9 e A e F.
2 - popolare le options della select della milestone 3 dinamicamente.
Consigli del giorno
Come sempre, iniziamo prima di tutto dall'analisi e comprensione della consegna. Scomponiamo il problema in 
micro-passaggi logici che solamente in un secondo momento trasformeremo in codice.
Le icone presenti nella struttura dati fanno riferimento alla nota libreria Font Awesome, perciò come prima cosa 
assicuriamoci di aver inserito il link alla cdn nell'head della pagina. Dopodiché, basandoci sul codice di 
riferimento nel sito di Font Awesome, analizziamo come è formato il tag <i> di un'icona qualsiasi, 
in particolare focalizziamoci sulle classi.
Come possiamo usare i dati presenti nella nostra struttura dati per creare l'elemento html nel modo corretto 
e visualizzare l'icona in pagina?
Inizialmente può essere sufficiente stampare dei semplici div, senza alcuno stile, con all'interno l'icona e 
uno span con il nome.
Solamente quando la parte logica è completa, ci dedichiamo al css.
NB: L'esercizio My Team con array di oggetti e questo sulle icone sono due esercizi chiave per poter svolgere 
la milestone che incombe. Dedicateci del tempo e approfondite gli argometi trattati.
*/


const playIcons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateRandomColor()
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: generateRandomColor()
	}
];


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



function generateRandomColor() {
	const letters = '0123456789ABCDEF';
	let color = '#';
	for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}



