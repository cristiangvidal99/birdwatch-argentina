import { useState } from 'react'

const ANIMALS = ['Águila', 'Cóndor', 'Colibrí', 'Guanaco', 'Zorro']
const LOCATIONS = ['Precordillera', 'Patagonia', 'Selva', 'Monte', 'Delta']

function getRandomItem(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function App() {


  return (
    <h1>BirdWatch Argentina 🐦</h1>
  )
}

export default App
