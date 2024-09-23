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
        event.preventDefault();  
        window.history.back();
    });

// Gravador 

document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    const microphoneButton = document.getElementById('microphone-button');

    let isRecording = false;
    let mediaRecorder;
    let audioChunks = [];

    // Função para realizar a pesquisa de texto
    function performTextSearch(query) {
        console.log('Pesquisa por texto:', query);
        // Aqui você pode processar a pesquisa
        // Exemplo: enviar a consulta para o servidor
    }

    // Função para iniciar e parar a gravação de voz
    async function toggleVoiceRecording() {
        console.log('Botão do microfone clicado. Estado de gravação:', isRecording);
        if (isRecording) {
            console.log('Parando a gravação.');
            mediaRecorder.stop();
            microphoneButton.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zm-5 10a1 1 0 0 1 2 0v1a5 5 0 1 0 10 0v-1a1 1 0 0 1 2 0v1a7 7 0 0 1-14 0v-1z"/>
                    <path d="M12 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1z"/>
                </svg>
            `;
        } else {
            console.log('Iniciando a gravação.');
            try {
                const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
                mediaRecorder = new MediaRecorder(stream);
                mediaRecorder.start();
                microphoneButton.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 1a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3zm-5 10a1 1 0 0 1 2 0v1a5 5 0 1 0 10 0v-1a1 1 0 0 1 2 0v1a7 7 0 0 1-14 0v-1z"/>
                        <path d="M12 22a1 1 0 0 1-1-1v-2a1 1 0 0 1 2 0v2a1 1 0 0 1-1 1z"/>
                    </svg>
                `;
                mediaRecorder.ondataavailable = event => {
                    audioChunks.push(event.data);
                    console.log('Dados de áudio disponíveis:', event.data);
                };
                
                mediaRecorder.onstop = () => {
                    const audioBlob = new Blob(audioChunks, { type: 'audio/wav' });
                    audioChunks = [];
                    const audioUrl = URL.createObjectURL(audioBlob);
                    // Aqui você pode enviar o áudio para um servidor ou reproduzi-lo
                    // Exemplo: new Audio(audioUrl).play();
                    console.log('Gravação concluída. URL do áudio:', audioUrl);
                };
            } catch (error) {
                console.error('Erro ao acessar o microfone:', error);
            }
        }
        isRecording = !isRecording;
    }

    // Adiciona o evento de clique para o botão do microfone
    microphoneButton.addEventListener('click', toggleVoiceRecording);

    // Adiciona o evento de submit para o formulário
    searchForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Previne o envio padrão do formulário
        const searchQuery = searchInput.value.trim();
        if (searchQuery) {
            console.log('Consulta de pesquisa enviada:', searchQuery);
            performTextSearch(searchQuery);
        } else {
            console.log('Campo de pesquisa vazio.');
        }
    });
});

