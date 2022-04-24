function generateLetter()
{
    const elementValue = document.querySelector('#carta-texto').value
    const elementParagraph = document.getElementById('carta-gerada')
    const elementInput = document.querySelector('input')
    const splittedValue = elementValue.split(' ')
    const elementCounter = document.querySelector('#carta-contador')
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

            let randomizer = styles[Math.floor(Math.random() * styles.length)] 

            elementParagraph.innerHTML += '<span>' + splittedValue[index] + '</span>'     
            elementParagraph.children[index].className = randomizer
        }   

        elementCounter.innerHTML = splittedValue.length

        let click = document.querySelectorAll('span')

        for (let index = 0; index < click.length; index += 1)
        {
            click[index].addEventListener('click', randomizeLetter)
        }
    }
}

function randomizeLetter(origin)
{

    const styles = ['newspaper', 'magazine1', 'magazine2', 'medium', 'big', 'reallybig', 'rotateleft', 'rotateright', 'skewleft', 'skewright']
    let randomizer = styles[Math.floor(Math.random() * styles.length)]

    origin.target.className = randomizer
    // const element = document.getElementById('carta-gerada').children

    // for (let index = 0; index < element.length; index += 1)
    // {
    //      
    //     element[index].className = randomizer
    // }
    


}

// EVENT LISTENERS

let button = document.querySelector('#criar-carta')
// let letter = document.querySelector('#carta-gerada')
button.addEventListener('click', generateLetter)
// letter.addEventListener('click', randomizeLetter)