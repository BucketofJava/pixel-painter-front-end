import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutableApp from './bucketrouter/RoutableApp';
import PixelPaintGrid from './Components/PixelPaintGrid';
import PageNotFound from './Pages/PageNotFound';
import TestPage from './Pages/TestPage';
import Settings from './Pages/Settings';
import ProfileSettings from './Pages/ProfileSettings';
import AccountSettings from './Pages/AccountSettings';
import AnotherTestPage from './Pages/AnotherTestPage';


const routeObj={
  "settings": {
    "profile": (() => <ProfileSettings />),
    "": (() => <Settings />),
    "account": (() => <AccountSettings />),
    ":id": (() => <TestPage />),
    "test": {
      "": (() => <Settings />),
      "testing": (() => <TestPage />),
      ":test": {
        "": (() => <Settings />),
        "yay": {
          "": (() => <Settings />),
          ":hi": (() =><AnotherTestPage />)
        }
      }
    }
            },
  "": (() => <PixelPaintGrid gridSizeX="30" gridSizeY="40" maxSize="1200" />),
  default: (() => <PageNotFound />)
}
function App() {
  return (
    <RoutableApp className="App" routeObj={routeObj} />
  );
}

export default App;
