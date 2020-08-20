import React from 'react'
import ReactDOM from 'react-dom'
import 'reset.css'
import Root from './containers/Root'

const root = document.createElement('div')
root.id = 'root'
document.body.appendChild(root)

ReactDOM.render(<Root />, document.getElementById('root'))
