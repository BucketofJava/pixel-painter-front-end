import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import RoutableApp from './bucketrouter/RoutableApp';
import PixelPaintGrid from './Components/PixelPaintGrid';
import PageNotFound from './Pages/PageNotFound';
import TestPage from './Pages/TestPage';
import Settings from './Pages/Settings';
import ProfileSettings from './Pages/ProfileSettings';
import AccountSettings from './Pages/AccountSettings';


const routeObj={
  "settings": {
    "profile": (() => <ProfileSettings />),
              "": (() => <Settings />),
              "account": (() => <AccountSettings />),
              ":id": (() => <TestPage />),
              "test": {
                "": (() => <Settings />),
                "testing": (() => <TestPage />)
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
