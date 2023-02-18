import Mouse from './Mouse';
// picture
import Cappuccino from './cpcn.jpg';
import Latte from './Latte.jpg';
import Mocha from './Mocha.png';
import HBcff from './HBcff.jpg';
import Eps from './Eps.png';

function App() {
  let customer = [
    { picture:Cappuccino },
    { picture:Latte },
    { picture:Mocha  },
    { picture:HBcff  },
    { picture:Eps },
  ]
  return (
    <>
    <Head/>
    {/* <Welcome name="Maria"/>
    <p className="App">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sequi facilis. Eum tempora similique incidunt! Debitis maiores sed voluptatum fugit vero, eaque harum nobis porro fugiat aspernatur quo quaerat amet.

    </p> */}
    {
      customer.map( s =>
        <Mouse picture={s.picture}/>
        )
    }
    <Footer/>
    
    </>
   
  );
}

export default App;

