import { useState, useRef } from 'react'
import './App.css'

function App() {
	const [randomInput, setRandomInput] = useState('')
	const [seconds, setSeconds] = useState('0')
	const renders = useRef(0)
	const timerID = useRef()

	const handleChange = (e) => {
		setRandomInput(e.target.value)
		renders.current++ //value of ref
	}

	const startTimer = () => {
		timerID.current = setInterval(() => {
			renders.current++
			setSeconds((prev) => prev + 1)
		}, 1000)
	}

	const stopTimer = () => {
		clearInterval(timerID.current)
		timerID.current = 0 //sets timer to zero
	}

	const resetTimer = () => {
		stopTimer()
		if (seconds) {
			renders.current++
			setSeconds(0)
		}
	}

	return (
		<main className="App">
			<input
				type="text"
				value={randomInput}
				placeholder="random input"
				onChange={handleChange}
			/>
			<p> Renders: {renders.current}</p>
			<br /> <br />
			<section>
				<button onClick={startTimer}>Start </button>
			</section>
			<section>
				<button onClick={stopTimer}>Stop </button>
			</section>
			<section>
				<button onClick={resetTimer}>Reset </button>
			</section>
			<br /> <br />
			<p>Seconds : {seconds}</p>
		</main>
	)
}

export default App
