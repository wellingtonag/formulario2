document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio real do formulário
        
        // Aqui você pode adicionar a lógica para processar o formulário
        alert('Formulário enviado com sucesso!');
        
        // Limpar o formulário após o envio
        form.reset();
    });
});
