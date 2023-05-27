const preguntasFrecuentes = () => {

    const lasPreguntas = document.querySelectorAll('.preguntas__titulo');

    lasPreguntas.forEach(pregunta => {

        pregunta.addEventListener('click', () => {


            let parrafo = pregunta.nextElementSibling //elemento siguiente inmediato al titulo

            let height = 0
            if (parrafo.clientHeight === 0) {

                height = parrafo.scrollHeight
                pregunta.children[0].classList.add('preguntas__icon_rotar')

            } else {

                pregunta.children[0].classList.remove('preguntas__icon_rotar')
            }
            parrafo.style.height = `${height}px`

        })
    })
}

preguntasFrecuentes()