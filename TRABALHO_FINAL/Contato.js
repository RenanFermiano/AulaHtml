document.getElementById('contatoForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    if (nome && email && mensagem) {
        alert(`Obrigado pela sua mensagem, ${nome}! Nós entraremos em contato em breve.`);
        
        // Limpa o formulário após o envio
        document.getElementById('contatoForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
