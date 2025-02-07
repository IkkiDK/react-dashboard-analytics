import "./App.css";

import Ikki from "./assets/Ikki2.jpg";
import ConditionalRender from "./components/ConditionalRender";
import ListRender from "./components/ListRender";
import ManageData from "./components/ManageData";

function App() {
  return (
    <div className="App">
      <h1>Avancando em react</h1>

      {/*imagem em public */}
      <div>
        <img src="/Ikki.jpg" alt="Wallpaper 1920x1080" />
      </div>
      {/*imagem em assets*/}
      <div>
        <img src={Ikki} alt="Nick com borda vermelha" />
      </div>
      <div>
        <ManageData />
        <ListRender />
        <ConditionalRender />
      </div>
    </div>
  );
}

export default App;
