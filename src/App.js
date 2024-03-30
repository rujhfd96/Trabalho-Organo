import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import { useState } from 'react'
import Time from './componentes/Time';



function App() {

  const times = [
    {
      nome: 'Counter Strike',
      corPrimaria: '#57C278',
      corSecundaria: '#D9F7E9'
    },
    {
      nome: 'Rainbow Six',
      corPrimaria: '#82CFFA',
      corSecundaria: '#E8F8FF'
    },
    {
      nome: 'Fifa',
      corPrimaria: '#A6D157',
      corSecundaria: '#F0F8E2'
    },
    {
      nome: 'Rocket League',
      corPrimaria: '#E06B69',
      corSecundaria: '#FDE7E8'
    },
    {
      nome: 'Phasmophobia',
      corPrimaria: '#D86EBF',
      corSecundaria: '#FAE5F5'
    },
    {
      nome: 'Valorant',
      corPrimaria: '#FEBA05',
      corSecundaria: '#FFF5D9'
    },
    {
      nome: 'Minecraft',
      corPrimaria: '#FF8A29',
      corSecundaria: '#FFEEDF'
    },
  ]

const [colaboradores, setColaboradores] = useState([])

const aoNovoColaboradorAdd = (colaborador) => {
  
  setColaboradores([...colaboradores, colaborador])
  
  
}

  return (
    <div className="App">      
        <Banner />
        <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado = {colaborador => aoNovoColaboradorAdd(colaborador)}/>
        
        {times.map(time => <Time 
        key={time.nome} 
        nome = {time.nome} 
        corPrimaria = {time.corPrimaria} 
        corSecundaria = {time.corSecundaria}
        colaboradores = {colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />)}
        
    </div>
  );
}

export default App;
