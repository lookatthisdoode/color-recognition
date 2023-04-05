import logo from './logo.svg';
import './App.css';
import Navigation from './components/Navigation/Navigation'
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import Logo from './components/Logo/Logo'
import ParticlesBg from 'particles-bg'


function App() {
  return (
    <div className="App">
      <ParticlesBg color="#6495ED" type="polygon" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
      {/*<FaceRecognition />*/}
    </div>
  );
}

export default App;
