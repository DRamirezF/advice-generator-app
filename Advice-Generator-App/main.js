const adviceId = document.querySelector('#advice-number');
const adviceText = document.querySelector('.advice-text');
const diceButton = document.querySelector('#dice')

document.addEventListener('DOMContentLoaded', () => {
    obtenerFrase();

    diceButton.addEventListener('click', obtenerFrase)
})

const url = '	https://api.adviceslip.com/advice'
const obtenerFrase = async () => {
    try {
        const resultado = await fetch(url);
        const respuesta = await resultado.json();

        // console.log(resultado);
        // console.log(respuesta.slip.advice);
        // console.log(respuesta.slip.id);

        agregarTexto(respuesta.slip);
    } catch (error) {
        console.log(error);
    }
}

const agregarTexto = respuesta => {
    const { id, advice } = respuesta;
    // console.log(advice);

    adviceId.textContent = id;
    adviceText.textContent = advice;
}
