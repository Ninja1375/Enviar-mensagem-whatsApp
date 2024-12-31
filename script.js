// Seleção do formulário
const form = document.getElementById('messageForm');

// Adiciona evento ao enviar o formulário
form.addEventListener('submit', function (event) {
    event.preventDefault();

    // Obtém os valores dos campos
    const phoneNumber = document.getElementById('phoneNumber').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validação do número
    if (phoneNumber === '') {
        alert('Por favor, insira o número do celular.');
        return;
    }

    // Codifica a mensagem e cria a URL
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // Abre o WhatsApp
    window.open(url, '_blank');
});
