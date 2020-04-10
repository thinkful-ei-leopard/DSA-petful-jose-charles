import './index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import Root from './root/Root'
import { BrowserRouter } from 'react-router-dom';
import { PetfulProvider } from './context/petful-context'

ReactDOM.render(
    <BrowserRouter>
        <PetfulProvider>
            <Root />
        </PetfulProvider>
    </BrowserRouter>
, document.getElementById('root'))
