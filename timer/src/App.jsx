import { useState, useRef } from 'react'
import './App.css'

function App() {
	const [randomInput, setRandomInput] = useState('')
	const renders = useRef(0)
	const inputRef = useRef()

	const handleChange = (e) => {
		setRandomInput(e.target.value)
		renders.current++ //value of ref
	}

	const focusOnInput = () => {
		inputRef.current.focus()
	}

	return (
		<main className="App">
			<input
				ref={inputRef}
				type="text"
				value={randomInput}
				placeholder="random input"
				onChange={handleChange}
			/>
			<p> Renders: {renders.current}</p>
			<br /> <br />
			<p>{randomInput}</p>
		</main>
	)
}

export default App
