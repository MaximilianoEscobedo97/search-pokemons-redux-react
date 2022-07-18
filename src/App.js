import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import  CantidadPokemon  from './components/cantidadPokemon';
import  CompraPokemon  from './components/compraPokemon';
import { store } from './redux/store';
import { Provider } from "react-redux"

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <div className='row'>
          <div className='col-12'>
            <div className='card mt-5' style={{ maxWidth: '370px' }}>
              <div className='row no-gutters'>
                <div className='col-4'>
                  <img src={require('./img/pokemon.webp')} alt="pokemon" className='card-img' />
                </div>
                <div className='col-8'>
                  <div className='card-body'>
                    <div className='card-title h3 text-center'>
                      <CantidadPokemon />
                    </div>
                    <CompraPokemon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Provider>

  );
}

export default App;
