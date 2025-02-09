let moedas = 50; // Moedas iniciais
let vozSelecionada = "Masculino";
let custoVoz = 0;

function selecionarVoz(voz, custo) {
    vozSelecionada = voz;
    custoVoz = custo;
    alert(`Voz selecionada: ${voz} (Custo: ${custo} moedas)`);
}

function ouvirTexto() {
    let texto = document.getElementById("texto").value;
    if (!texto) {
        alert("Digite um texto para ouvir.");
        return;
    }

    if (custoVoz > 0 && moedas < custoVoz) {
        alert("Moedas insuficientes!");
        return;
    }

    if (custoVoz > 0) {
        moedas -= custoVoz;
        document.getElementById("moedas").innerText = moedas;
    }

    let fala = new SpeechSynthesisUtterance(texto);
    fala.voice = speechSynthesis.getVoices().find(voice => voice.name.includes(vozSelecionada));
    speechSynthesis.speak(fala);
}

function assistirAnuncio() {
    let moedasGanhas = Math.floor(Math.random() * 6) + 5; // Ganha entre 5 e 10 moedas
    moedas += moedasGanhas;
    document.getElementById("moedas").innerText = moedas;
    alert(`Você ganhou ${moedasGanhas} moedas!`);
}
