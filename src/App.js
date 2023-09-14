import "./App.css";
import Leftmenu from "./components/Leftmenu";
import Rightpage from "./components/Rightpage";

function App() {
  return (
    <>
      <div id="main-page">
        {/* left menu component */}
        <div id="left">
          <Leftmenu/>
        </div>

        {/* right sliding page */}
        <div id="right">
          <Rightpage/>
        </div>
      </div>
    </>
  );
}

export default App;
