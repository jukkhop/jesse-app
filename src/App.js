import { BrowserRouter, Navigate, Route, Routes, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/jesse" replace />} />
        <Route path="/jesse" element={<HuutistaPage name="Jesselle" />} />
        <Route path="/toni" element={<HuutistaPage name="Tonille" />} />
      </Routes>
    </BrowserRouter>
  );
}

function HuutistaPage({ name }) {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <ul style={{ display: 'flex', columnGap: '30px', listStyle: 'none' }}>
            <li>
              <Link to="/jesse">Jesse</Link>
            </li>
            <li>
              <Link to="/toni">Toni</Link>
            </li>
          </ul>
        </nav>
        <p>
          Huutista <code>{name}</code> :D
        </p>
      </header>
    </div>
  );
}

export default App;
