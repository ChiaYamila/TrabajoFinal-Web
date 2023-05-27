const form = document.querySelector('.footer__form')
const err = document.querySelector('.error')
const divmsg = document.getElementById("msg")

form.addEventListener('submit', (f) => {
    //evita el envio automatico
    f.preventDefault()

    let txtMail = document.getElementById('mail').value
    let txtNombre = document.getElementById('nombre').value
    let txtCelu = document.getElementById('celu').value

    const emailValido = (txtMail) => {
        const expRegMail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return expRegMail.test(txtMail)
    }

    const largo = (dato, min) => dato.length < min ? false : true

    const expRegNumeros = /^[0-9]*$/i
    const expRegLetras = /^[a-zA-Z\s]*$/i

    if (txtCelu.match(expRegNumeros) && largo(txtCelu, 10) && txtNombre.match(expRegLetras) && largo(txtNombre, 3) && emailValido(txtMail)) {

        const para = document.createElement("p")
        para.innerHTML = `La suscripcion de <span class='span'>${txtNombre}</span> con E-mail: ${txtMail} y Mobil: ${txtCelu} fue existosa!`
        divmsg.append(para)
        divmsg.classList.add('ver')

        document.getElementById('mail').value = ''
        document.getElementById('nombre').value = ''
        document.getElementById('celu').value = ''
        window.scroll(0, 0)
        err.classList.remove('display')

    } else {

        err.classList.add('display')
    }

})