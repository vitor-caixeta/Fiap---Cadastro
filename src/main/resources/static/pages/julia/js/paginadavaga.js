// Navbar principal 
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // Remove 'active' class from all links
            navLinks.forEach(link => link.classList.remove('active'));
            // Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

    // Optional: Initialize the first link as active (if needed)
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }
});

// navbar da pagina 

document.addEventListener('DOMContentLoaded', () => {
    const backButton = document.getElementById('backButton');
    const profileLink = document.getElementById('profileLink');

    // Funcionalidade do botão de voltar
    backButton.addEventListener('click', (event) => {
        event.preventDefault();  // Evita o comportamento padrão do link

        // Volta para a página anterior no histórico do navegador
        window.history.back();
    });

    // Funcionalidade do link para o perfil da empresa
    profileLink.addEventListener('click', (event) => {
        console.log('Navegando para o perfil da empresa.');
        // Aqui você pode adicionar lógica adicional, se necessário
    });
});


// Botão de Favorito
// Seleciona o botão de favorito
const favoriteBtn = document.getElementById('favorite-btn');

// Adiciona um ouvinte de eventos para o clique
favoriteBtn.addEventListener('click', function() {
    // Alterna a classe 'active' para o botão
    this.classList.toggle('active');
});
