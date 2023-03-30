import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/home";
import Layout from "./components/layout";
import '../src/styles/app.css'

function App() {
  return (
    <Router>
      <div className='main-app'>
      <Layout/>
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </main>
      </div>
    </Router>
  );
}

export default App;
