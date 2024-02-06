import { useRouteError } from "react-router-dom";

function App() {
  const error = useRouteError();

  return (
    <div id="app">
      <h1>Une erreur inattendue s&apos;est produite</h1>
      <p className="help">{error.message || error.statusText}</p>
    </div>
  );
}

export default App;
