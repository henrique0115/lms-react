import { Card } from '../components/Card'
import './App.css'

export function App() {
  return (
    <div className='container'>
      <header>
        <section>
          <h1>Previsão do Tempo</h1>
        </section>
        <section className='search'>
          <input type="text" placeholder='Nome da cidade'/>
          <button type='button'>Pesquisar</button>    
        </section>
      </header>
      
      <main>
        <Card />
      </main>
    </div>
  )
}