import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PixelPaintGrid from './Components/PixelPaintGrid';

function App() {
  return (
    <div className="App">
      <PixelPaintGrid gridSizeX="30" gridSizeY="40" maxSize="1200"/>
    </div>
  );
}

export default App;
