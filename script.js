function generateLetter()
{
    const elementValue = document.querySelector('#carta-texto').value
    const elementParagraph = document.getElementById('carta-gerada')
    const splittedValue = elementValue.split(' ')

    while (elementParagraph.firstChild)
    {

        elementParagraph.firstChild.remove()
    }

    for (let index = 0; index < splittedValue.length; index += 1)
    {

        elementParagraph.innerHTML += '<span>' + splittedValue[index] + '</span>'
    }
}






// CALL FUNCTION

// EVENT LISTENERS

let button = document.querySelector('#criar-carta')
button.addEventListener('click', generateLetter)