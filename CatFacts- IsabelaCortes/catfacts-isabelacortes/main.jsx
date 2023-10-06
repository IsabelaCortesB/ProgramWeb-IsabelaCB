import './style.css'
6
import './style.css'
import React from 'react'
import {createRoot} from 'react-dom/client'
import { App } from './src/App'

const rootElement = document.getElementById('app')
const root = createRoot(rootElement)

root.render(<App/>)