document.querySelectorAll('.dropdown-toggle').forEach(function(button) {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;

        // Alterna a visibilidade do conteúdo e a expansão do dropdown
        dropdownContent.classList.toggle('hidden');
        
        // Alterna a classe para controlar a animação (opcional)
        const dropdown = this.parentElement;
        dropdown.classList.toggle('expanded');
    });
});


// FAQ E SUPORTE

function toggleTab(element) {
    // Remove a classe 'active' de todos os elementos
    document.querySelectorAll('.tab').forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Adiciona a classe 'active' ao elemento clicado
    element.classList.add('active');
}
