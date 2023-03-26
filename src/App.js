
import { useState } from 'react';
import './App.css';
import { ColorBox } from './Component/ColorBox';

function App() {
  const [colors, setColors] = useState([]);
  const [error, setError] = useState(null);
  getColors();
  async function getColors() {
    try {
      const res = await fetch('http://127.0.0.1:5500/data.json')
      const data = await res.json();
      setColors(data);
    }
    catch (error) {
      setError(error.message);
    }
    finally {
      console.log("Fetch Complted")
    }

  }

  return (

    <center>
      <div>
        <div>
          <header>
            <h2>
              Color Searcher
            </h2>
          </header>
        </div>
        <section>
          {colors.length &&
            <>
              <input type="text" />
              <main>
                {colors.map((color, index) => {
                  return (
                    <ColorBox key={color} color={color}>{color}</ColorBox>
                  )
                }


                )}


              </main>

            </>
          }
          {error && <h4 style={{
            textAlign: 'center'
          }}>{error}</h4>}
        </section>




      </div>
    </center>

  );
}

export default App;
