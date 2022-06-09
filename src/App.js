import { 
Routes,
Route
} from "react-router-dom";
import { Landing } from './Pages';

function App() {
return (
  <div classname="App">
    <Routes>
      <Route path="/" element={ <Landing /> } />
    </Routes>
  </div>
);
}

export default App;
