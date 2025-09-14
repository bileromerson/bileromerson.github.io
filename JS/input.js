window.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#input input');
    if (!input) return;

    input.addEventListener('keydown', function (e) {
        if (e.key === 'Enter') {
            const valor = input.value.trim();
            if (["1", "2", "3", "4"].includes(valor)) {
                // Aqui você pode chamar a função para processar a resposta correta
                if (valor === "1") {
                    window.location.href = './HTML/about_me.html'; // Redireciona para about_me.html
                } else if (valor === "2") {
                    window.location.href = './HTML/interests.html'; // Redireciona para interests.html
                } else if (valor === "3") {
                    window.location.href = './HTML/projects.html'; // Redireciona para projects.html
                } else if (valor === "4") {
                    window.location.href = './HTML/contacts.html'; // Redireciona para contacts.html
                }
                input.value = "";
            } else {
                alert("Erro: Type 1, 2, 3 or 4.");
                input.value = "";
            }
        }
    });
});