document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('nameForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');
    const warningModal = new bootstrap.Modal(document.getElementById('warningModal'));
    const modalBody = document.getElementById('modalBody');

    // Função para validar a entrada e habilitar o botão
    function checkInputs() {
        const isUsernameValid = usernameInput.value.trim() !== '';
        const isPasswordValid = passwordInput.value.trim() !== '';
        loginButton.disabled = !(isUsernameValid && isPasswordValid);
    }

    usernameInput.addEventListener('input', checkInputs);
    passwordInput.addEventListener('input', checkInputs);

    function handleLoginClick() {
        if (!usernameInput.value.trim() || !passwordInput.value.trim()) {
            modalBody.innerText = 'Por favor, preencha todos os campos antes de clicar em "Entrar".';
            warningModal.show();
        } else {
            // Envia os dados para validação no backend
            fetch('/validate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username: usernameInput.value.trim(), password: passwordInput.value.trim() }),
            })
                .then(response => response.text())
                .then(data => {
                    console.log(data);
                    if (data === "Validado") {
                        // Armazena o nome no localStorage e redireciona
                        localStorage.setItem('clientName', usernameInput.value.trim());
                        window.location.href = 'pages/wellington/home.html';
                    } else {
                        console.log('aqui');
                        modalBody.innerText = 'A senha não atende aos requisitos.';
                        warningModal.show();
                    }
                })
                .catch((error) => {
                    console.error('Error:', error);
                    modalBody.innerText = 'Erro ao validar o usuário.';
                    warningModal.show();
                });
        }
    }


    loginButton.addEventListener('click', handleLoginClick);

    // Desabilita o botão "Entrar" inicialmente
    loginButton.disabled = true;
});
