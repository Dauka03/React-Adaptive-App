import './App.css';
import Component_body from './components/Component_body';
import Header from './components/Header';
function App() {
  return (
    <div className="App">
      <header className='App-header'>
       <Header/>
      </header>
      <section className='App-body'>
        <Component_body/>
      </section>
    </div>
  );
}

export default App;
