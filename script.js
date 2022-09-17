const titreanime = document.querySelector('.textintro h1');

new Typewriter(titreanime, {
    loop : false
})

.typeString('Marvin Clerc')
.pauseFor('400')
.typeString(',Aka <span style="color:bisque">"Le Zoukeur"</span>')
.pauseFor('1000')
.deleteChars('12')
.typeString('<span style="color:bisque">"Le gogo danseur"</span>')
.pauseFor('1000')
.deleteChars('17')
.typeString('<span style="color:bisque">"Le Pro Jäger"</span>')
.pauseFor('1000')
.deleteChars('20')
.start()