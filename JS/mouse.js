document.addEventListener('DOMContentLoaded', () => {
    const customCursor = document.getElementById('custom-cursor');
    const centerDot = document.querySelector('.center-dot');
    const buttons = document.querySelectorAll('button'); 
    let currentRotation = 0;
    
    // Variável para rastrear se o cursor deve seguir o mouse
    let isCursorLocked = false; 

    // Função para animação de rotação (mantida)
    function animateRotation() {
        // A rotação só acontece se o cursor NÃO estiver travado
        if (!isCursorLocked) { 
            currentRotation = (currentRotation + 0.5) % 360; 
            customCursor.style.setProperty('--rotation', `${currentRotation}deg`);
            requestAnimationFrame(animateRotation);
        }
    }

    // Fazer o cursor personalizado seguir o mouse (AJUSTADO)
    document.body.addEventListener('mousemove', (e) => {
        // O cursor SÓ segue o mouse se NÃO estiver travado
        if (!isCursorLocked) {
            centerDot.style.opacity = 1;
            customCursor.style.left = e.clientX + 'px';
            customCursor.style.top = e.clientY + 'px';
            if (customCursor.style.animationName !== 'rotate') {
                 customCursor.style.animationName = 'rotate'; 
                 requestAnimationFrame(animateRotation);
            }
        }
    });
    
    // O CÓDIGO DE INTERAÇÃO COM BOTÕES COM TRAVAMENTO
    buttons.forEach(button => {
        button.addEventListener('mouseenter', (e) => {
            // 1. TRAVAR O CURSOR
            isCursorLocked = true; 
            
            customCursor.classList.add('cursor-on-button');
            customCursor.style.animationName = 'none';
            centerDot.style.opacity = 0;
            // 2. Calcular a posição CENTRAL do botão
            const buttonRect = e.currentTarget.getBoundingClientRect();
            
            // Posição central horizontal (Left + metade da Largura)
            const centerX = buttonRect.left + buttonRect.width / 2 ;
            // Posição central vertical (Top + metade da Altura)
            const centerY = buttonRect.top + buttonRect.height / 2;

            // 3. FORÇAR O CURSOR PERSONALIZADO para o centro do botão
            customCursor.style.left = centerX + 'px';
            customCursor.style.top = centerY + 'px';


            // 4. Lógica de Abertura das Hastes (MANTIDA)
            const cursorSize = 20; // 20px é o width/height de #custom-cursor no CSS
            const halfCursorSize = cursorSize / 2;

            const openDistanceX = (buttonRect.width / 2) - halfCursorSize;
            const openDistanceY = (buttonRect.height / 2) - halfCursorSize;
            
            const finalOpenX = openDistanceX > 0 ? -openDistanceX : 0;
            const finalOpenY = openDistanceY > 0 ? -openDistanceY : 0;

            customCursor.style.setProperty('--open-x', `${finalOpenX}px`);
            customCursor.style.setProperty('--open-y', `${finalOpenY}px`);
        });

        button.addEventListener('mouseleave', () => {
            // 1. DESTRAVAR O CURSOR
            isCursorLocked = false; 
            
            customCursor.classList.remove('cursor-on-button');
            customCursor.style.animationName = 'rotate';
            requestAnimationFrame(animateRotation);
            
            // Opcional: Limpar as variáveis
            customCursor.style.setProperty('--open-x', '0px');
            customCursor.style.setProperty('--open-y', '0px');
        });
    });
});