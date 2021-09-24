// import{ snakeCase } from 'lodash'
// const word = snakeCase('alireza gholami')
import './style.scss'

import { getAverage } from './utils'

const word = 'alireza gholami'.toUpperCase()


const average = getAverage(10, 12, 15, 20, 19)

const render = (...args) => {
    for (const item of args) {
        const element = document.createElement('p');
        element.innerHTML = item;
        document.body.appendChild(element)
    }
}


render(word, average)