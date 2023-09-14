import { useEffect, useState } from "react"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
import Header from "./Header"

function App() {

	const location = useLocation()
	const navigate = useNavigate()
	const [backgroundPosition, setBackgroundPosition] = useState(0)
	const [way, setWay] = useState('forward')
	
	useEffect( () => {
		
		if ( location.pathname === '/' ) {
			navigate('/home')
		}

		if ( backgroundPosition === 100 ) {
			setWay('forward')
		} else if ( backgroundPosition === 200 ) {
			setWay('backward')
		}

		let newPosition
		if ( way === 'forward' ) {
			newPosition = backgroundPosition + 100
		} else {
			newPosition = backgroundPosition - 100
		}

		setBackgroundPosition(newPosition)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [location.pathname] )

	return (
		<>
			<div id="app">

				<Header />

				<div className="content">
					<div className="container">
						<AnimatePresence mode="wait">
							<Outlet />
						</AnimatePresence>
					</div>
				</div>
				
				<div id="background" style={{ left: -backgroundPosition + '%' }} />
			</div>
		</>
	)

}

export default App
