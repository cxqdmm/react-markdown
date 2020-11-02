import "./App.css";
import useEffect from "./md/useEffect.md";
function App() {
  return (
    <div className="App">
      <div dangerouslySetInnerHTML={{ __html: useEffect }}></div>
    </div>
  );
}

export default App;
