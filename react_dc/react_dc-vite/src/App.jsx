  import './App.css'
import {InputText} from './components/InputText'
import { MyTitle } from './components/MyTitle'

<MyTitle />

function App() {

  return (
    <>
      {/* <h1>Olá, mundo!</h1> */}
    <MyTitle title="Olá, mundo!!" />
      
      <InputText
      id='nome'
      name='nome'
      placeholder='nome' />
      <br />
      <InputText
      id='sobrenome'
      name='sobrenome'
      placeholder='sobrenome' />  

    </>
  )
}

export default App
