import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import Projetos from './components/Projetos';
import './styles/components/app.sass';
import './styles/components/fundo.css';

export default function App() {
  return (
    <div id="portfolio">
      <h1>Igor Moreira</h1>
        <Sidebar />
        <MainContent />
        <Projetos />
      <p className="rodape">Por Igor Moreira - 2023</p>
    </div>
  );
}