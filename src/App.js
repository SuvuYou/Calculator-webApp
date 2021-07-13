import "./styles/style.css";
import Calculator from "./calculator";

function App() {
  return (
    <div className="App">
      <div className="header-flex-container">
        <h1>Calc</h1>
        {/* <div className="toggle-element">
          <h3>THEME</h3>
          <div className="toggle">
            <div className="grid-toggle">
              <h3>1</h3>
            </div>
            <div className="grid-toggle">
              <h3>2</h3>
            </div>
            <div className="grid-toggle">
              <h3>3</h3>
            </div>
            <div className="grid-toggle toggle-lever"></div> */}
        {/* </div> */}
        {/* </div> */}
      </div>
      <Calculator />
    </div>
  );
}

export default App;
