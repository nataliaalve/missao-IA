document.getElementById('quiz-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Previne o envio do formulário

    let score = 0;

    // Calculando a pontuação com base nas respostas
    for (let i = 1; i <= 5; i++) {
        const selectedOption = document.querySelector(`input[name="q${i}"]:checked`);
        if (selectedOption) {
            score += parseInt(selectedOption.value);
        }
    }

    // Exibindo o resultado com base na pontuação
    let resultText = '';
    if (score >= 12) {
        resultText = 'Você é um defensor forte das questões ambientais e sociais. Acredita que mudanças estruturais são necessárias para um futuro sustentável e justo!';
    } else if (score >= 8) {
        resultText = 'Você se importa com as questões sociais e ambientais, mas talvez ache que as mudanças devem ocorrer de maneira mais gradual e equilibrada.';
    } else if (score >= 4) {
        resultText = 'Você tem algumas preocupações com questões sociais e ambientais, mas talvez ainda ache que é preciso mais reflexão sobre o impacto das mudanças.';
    } else {
        resultText = 'Você parece ser mais cauteloso em relação às mudanças em áreas sociais, culturais e ambientais, podendo priorizar outros fatores antes de agir em relação a essas questões.';
    }

    // Exibindo o resultado
    document.getElementById('result-text').textContent = resultText;
    document.getElementById('result').style.display = 'block';
});
