// script.js
document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { // Kai vartotojas nuslenka 300px
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}); 



// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Pirmas mygtukas ir paslėptas tekstas
    document.getElementById('apie').addEventListener('click', function() {
        toggleText('apie', 'pasleptas');
    });

    // Antras mygtukas ir paslėptas tekstas
    document.getElementById('apie1').addEventListener('click', function() {
        toggleText('apie1', 'pasleptas1');
    });

    // Trečias mygtukas ir paslėptas tekstas
    document.getElementById('apie2').addEventListener('click', function() {
        toggleText('apie2', 'pasleptas2');
    });

    // Ketvirtas mygtukas ir paslėptas tekstas
    document.getElementById('apie3').addEventListener('click', function() {
        toggleText('apie3', 'pasleptas3');
    });

    // Funkcija, kuri keičia teksto rodymo būseną ir mygtuko tekstą
    function toggleText(buttonId, textId) {
        const pasleptas = document.getElementById(textId);
        const mygtukas = document.getElementById(buttonId);
        
        // Patikriname esamą display reikšmę
        if (pasleptas.style.display === 'none' || pasleptas.style.display === '') {
            pasleptas.style.display = 'flex'; // Jei paslėptas, rodom
            mygtukas.value = 'Mažiau';   // Pakeičiam mygtuko tekstą į "Mažiau"
        } else {
            pasleptas.style.display = 'none';  // Jei rodomas, slepiam
            mygtukas.value = 'Daugiau';  // Pakeičiam mygtuko tekstą į "Daugiau"
        }
    }
});

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); // Sustabdo formos siuntimą

    // Gauti įvesties vertes
    const vardas = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pavadinimas = document.getElementById('subject').value;
    const zinute = document.getElementById('message').value;

    // Tikrinti, ar visi laukai užpildyti
    if (vardas === '' || email === '' || pavadinimas === '' || zinute === '') {
        alert("Visi laukai privalomi!");
        return;
    }

    // Rodome rezultatus
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Siųsta informacija:</h3>
        <p><strong>Vardas:</strong> ${vardas}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Pavadinimas:</strong> ${pavadinimas}</p>
        <p><strong>Žinutė:</strong> ${zinute}</p>
    `;
    resultDiv.style.display = 'block'; // Parodo rezultatų bloką
});