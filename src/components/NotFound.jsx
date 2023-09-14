import Header from "./Header"
import { useRouteError } from "react-router-dom"

function App() {

    const error = useRouteError()

	return (
		<>
			<div id="app">

				<Header />

				<div className="content container">
					<h1>Une erreur inattendue s'est produite</h1>
                    <p className="help">{ error.statusText || error.message }</p>
				</div>
				
				<div id="background"></div>
			</div>
		</>
	)

}

export default App
