function toggleMode() {

    const html = document.documentElement
    const img = document.querySelector('#profile img')
    // html.classList.toggle('ligth')

    if(html.classList.contains('ligth')){

        html.classList.remove('ligth')
        img.setAttribute('src', './src/AvatarPedro.png')

    } else{

        html.classList.add("ligth")
        img.setAttribute('src', './src/avatar-ligth-pedro.png')

    }

    // Podemos usar o toggle também
    // Só colcar apenas o toggle
    // Código abaixo

   /*
    const = html = document.documentElement
    html.classList.toggle('ligth')
    */
}