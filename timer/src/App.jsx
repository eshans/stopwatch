import { useState, useRef } from 'react'
import './App.css'

function App() {
	const [randomInput, setRandomInput] = useState('')
	const renders = useRef(0)

	const handleChange = (e) => {
		setRandomInput(e.target.value)
	}

	return (
		<main className="App">
			<input
				type="text"
				value={randomInput}
				placeholder="random input"
				onChange={handleChange}
			/>
		</main>
	)
}

export default App
