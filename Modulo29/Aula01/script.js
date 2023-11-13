const titulo = document.querySelector('h1')
titulo.style.color = 'red'

//

const css = new CSSStyleSheet()
css.insertRule(
    `
        h2 {
            color: blue;
        }
    `
)
document.adoptedStyleSheets = [css]

//

let corPrincipal = 'yellow'
const css2 = new CSSStyleSheet()
css2.insertRule(
    `
        body {
            background-color: ${corPrincipal};
        }
    `
)
document.adoptedStyleSheets = [css2]
