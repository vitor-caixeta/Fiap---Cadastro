// recuperando o body 
const body = document.querySelector('body');
console.log(body);

// cancelar evento de submit 
document.querySelector ('form').addEventListener('submit', function(e){
e.preventDefault();

const campos = [
document.querySelector('#categoria'),
document.querySelector ('#tipodetrabalho'),
document.querySelector ('#localizacao'),
document.querySelector('#salario')
];
console.log (campos);
});


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

    backButton.addEventListener('click', (event) => {
        event.preventDefault(); 

        // Volta para a página anterior no histórico do navegador
        window.history.back();
    });
});


// Categoria 

const selectCategoria = document.getElementById('categoria');

// Função para atualizar a profissão selecionada
const atualizarProfissao = () => {
    const profissaoIndex = selectCategoria.value; 
    console.log("Índice da profissão selecionada:", profissaoIndex);

    const profissaoTexto = selectCategoria.options[selectCategoria.selectedIndex].text; 
    console.log("Texto da profissão selecionada:", profissaoTexto);
};

// Evento para atualizar a profissão selecionada quando o usuário mudar a seleção
selectCategoria.addEventListener('change', () => {
    console.log("Usuário alterou a profissão selecionada.");
    atualizarProfissao(); 
});

// Inicializa a profissão com a primeira opção selecionada (caso o usuário não interaja)
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada - inicializando com a primeira profissão.");
    atualizarProfissao();  
});



// Tipo de Trabalho 

// Seleciona os checkboxes pelo ID
const checkboxPresencial = document.getElementById('btn-check');
const checkboxHibrido = document.getElementById('btn-check-2');
const checkboxHomeOffice = document.getElementById('btn-check-3');

// Função para verificar quais checkboxes estão selecionados
const verificarSelecao = () => {
    const selecionados = [];

    // Verifica se cada checkbox está marcado e adiciona o texto correspondente
    if (checkboxPresencial.checked) {
        selecionados.push("Presencial");
    }
    if (checkboxHibrido.checked) {
        selecionados.push("Híbrido");
    }
    if (checkboxHomeOffice.checked) {
        selecionados.push("Home-office");
    }

    // Exibe no console as opções selecionadas
    console.log("Opções selecionadas:", selecionados.length > 0 ? selecionados.join(', ') : "Nenhuma");
};

// Adiciona evento de clique para cada checkbox
checkboxPresencial.addEventListener('change', verificarSelecao);
checkboxHibrido.addEventListener('change', verificarSelecao);
checkboxHomeOffice.addEventListener('change', verificarSelecao);

// Inicializa o status dos checkboxes quando a página carrega
document.addEventListener('DOMContentLoaded', verificarSelecao);



// Localização 

// Seleciona o dropdown de cidades
const selectLocalizacao = document.getElementById('localizacao');

// Função para lidar com a mudança na seleção
const atualizarLocalizacao = () => {
    const cidadeSelecionada = selectLocalizacao.options[selectLocalizacao.selectedIndex].text;
    console.log("Cidade selecionada:", cidadeSelecionada);
};

// Evento que captura a mudança no dropdown
selectLocalizacao.addEventListener('change', () => {
    console.log("Usuário alterou a cidade selecionada.");
    atualizarLocalizacao();  // Chama a função de atualização ao selecionar uma cidade
});

// Inicializa o dropdown com a primeira cidade selecionada
document.addEventListener('DOMContentLoaded', () => {
    console.log("Página carregada - inicializando com a primeira cidade.");
    atualizarLocalizacao();  // Chama a função ao carregar a página
});



// Salário 

// botão de range 
document.addEventListener('DOMContentLoaded', () => {
    const rangeMin = document.getElementById('rangeMin');
    const rangeMax = document.getElementById('rangeMax');
    const minValue = document.getElementById('minValue');
    const maxValue = document.getElementById('maxValue');
    const sliderFill = document.querySelector('.slider-fill');

    const updateSlider = () => {
        let min = parseInt(rangeMin.value);
        let max = parseInt(rangeMax.value);

        // Previne que os ranges se cruzem
        if (min > max) {
            min = max;
            rangeMin.value = min;
        }
        if (max < min) {
            max = min;
            rangeMax.value = max;
        }

        // Atualiza os valores de exibição
        minValue.textContent = `R$ ${min.toLocaleString('pt-BR')},00`;
        maxValue.textContent = `R$ ${max.toLocaleString('pt-BR')},00`;

        // Calcula a posição percentual dos controles
        const minPercent = (min - rangeMin.min) / (rangeMax.max - rangeMin.min) * 100;
        const maxPercent = (max - rangeMin.min) / (rangeMax.max - rangeMin.min) * 100;

        // Atualiza a posição da área preenchida entre os dois controles
        sliderFill.style.left = `${minPercent}%`;
        sliderFill.style.width = `${maxPercent - minPercent}%`;
    };

    // Escuta os eventos de movimento nos controles
    rangeMin.addEventListener('input', updateSlider);
    rangeMax.addEventListener('input', updateSlider);

    // Inicializa o slider com os valores padrões
    updateSlider();
});


// Botão Buscar 

document.addEventListener('DOMContentLoaded', () => {
    const buscarBtn = document.getElementById('buscarBtn');

    buscarBtn.addEventListener('click', () => {
        console.log('Botão de buscar foi clicado.');
    });
});

