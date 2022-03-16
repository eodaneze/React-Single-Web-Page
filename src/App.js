import './App.css';
// import { Download } from './components/download/Download';
// import Faq from './components/faq/Faq';
// import Features from './components/features/Features';
// import Footer from './components/footer/Footer';
// import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';
// import Subscribe from './components/subscribe/Subscribe';

// importing all the components using a single line of code
import {Navbar, Header, Features, Download, Subscribe, Faq, Footer} from "./components"

// create a different components for all your imports. inside your components folder create another components and give it a name index.js


function App() {
  return (
    <main>
        <header className="header-bg">
           <Navbar />
           <Header />
           <Features />
           <Download />
           <Subscribe />
           <Faq />
           <Footer />
        </header>
    </main>
  );
}

export default App;
