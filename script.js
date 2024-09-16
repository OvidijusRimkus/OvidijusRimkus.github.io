document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) { 
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}); 

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('apie').addEventListener('click', function() {
        toggleText('apie', 'pasleptas');
    });

    document.getElementById('apie1').addEventListener('click', function() {
        toggleText('apie1', 'pasleptas1');
    });

    document.getElementById('apie2').addEventListener('click', function() {
        toggleText('apie2', 'pasleptas2');
    });

    document.getElementById('apie3').addEventListener('click', function() {
        toggleText('apie3', 'pasleptas3');
    });

    function toggleText(buttonId, textId) {
        const pasleptas = document.getElementById(textId);
        const mygtukas = document.getElementById(buttonId);
        
        if (pasleptas.style.display === 'none' || pasleptas.style.display === '') {
            pasleptas.style.display = 'flex'; 
            mygtukas.value = 'Mažiau';  
        } else {
            pasleptas.style.display = 'none';  
            mygtukas.value = 'Daugiau'; 
        }
    }
});

document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault(); 

    const vardas = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const pavadinimas = document.getElementById('subject').value;
    const zinute = document.getElementById('message').value;

    if (vardas === '' || email === '' || pavadinimas === '' || zinute === '') {
        alert("Visi laukai privalomi!");
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
        <h3>Siųsta informacija:</h3>
        <p><strong>Vardas:</strong> ${vardas}</p>
        <p><strong>El. paštas:</strong> ${email}</p>
        <p><strong>Pavadinimas:</strong> ${pavadinimas}</p>
        <p><strong>Žinutė:</strong> ${zinute}</p>
    `;
    resultDiv.style.display = 'block';
});