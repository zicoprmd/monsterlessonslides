import './App.css';
import ImageSlider from './ImageSlider';

import zema1 from './assets/IMG_9742.JPG';

function App() {
  const slides = [
    { url: zema1, title: 'z1' },
    { url: 'http://localhost:3000/z2.JPG', title: 'z2' },
    { url: 'http://localhost:3000/z3.JPG', title: 'z3' },
    { url: 'http://localhost:3000/z4.JPG', title: 'z4' },
    { url: 'http://localhost:3000/z5.JPG', title: 'z5' },
  ];
  const containerStyles = {
    width: '500px',
    height: '280px',
    margin: '0 auto',
  };
  return (
    <div className="App">
      <h1>Hello monsterlessons</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
}

export default App;
