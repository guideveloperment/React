import './App.css';
import Primeiro from './components/Primeiro'
import CompPadrao, {Componente1, Componente2, Componente3, Componente4} from './components/Multi'
import Teste, {TesteGuilherme} from './components/Teste';
import Estilos from './components/estilos/Estilos';
import estilos from './components/estilos/Estilos';
import MinMax  from './components/MinMax';
import TesteBotao from './components/testebotao/botao';
import Titulo from './components/Titulo';
import Botao from './components/Botao';

function App (){
  return(
    <div>
      <Primeiro/>
      <CompPadrao/> 
      <Componente1/>
      <Componente2/>
      <Componente3/>
      <Componente4/> 
      <Teste/>
      <TesteGuilherme/>
      <Estilos/>
      <MinMax min="5" max="10"/>
      <MinMax min="44" max="199"/>
      <TesteBotao label="Comprar"/>
      <TesteBotao label="Adicionar"/>
      <TesteBotao label="Finalizar"/>
      <Titulo principal="Ola" secundario="tudo bem"/>
      <Botao/>

    </div>


  ) 
}

export default App;


