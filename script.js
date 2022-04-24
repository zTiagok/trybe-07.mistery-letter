function generateLetter()
{
    const elementValue = document.querySelector('#carta-texto').value
    const elementParagraph = document.getElementById('carta-gerada')
    const elementInput = document.querySelector('input')
    const splittedValue = elementValue.split(' ')
    const styles = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright']

    if (elementInput.value.trim().length === 0)
    {
        elementParagraph.innerHTML = 'por favor, digite o conteúdo da carta.'
    }
    else
    {
        
        while (elementParagraph.firstChild)
        {

            elementParagraph.firstChild.remove()
        }

        for (let index = 0; index < splittedValue.length; index += 1)
        {

            elementParagraph.innerHTML += '<span>' + splittedValue[index] + '</span>'     
            elementParagraph.children[index].className = styles[Math.floor(Math.random() * styles.length)]
        }   
    }

    
}





// CALL FUNCTION

// EVENT LISTENERS

let button = document.querySelector('#criar-carta')
button.addEventListener('click', generateLetter)