
import './App.css';
import {CakeView} from './features/cakes/CakeView'
import {IcecreamView} from './features/icecreams/IcecreamView'
import {UsersView} from './features/users/UsersView'
function App() {
  return (
    <div className="App">
      < CakeView />
      < IcecreamView />
      < UsersView />
    </div>
  );
}

export default App;
