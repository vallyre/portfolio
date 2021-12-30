import './base.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Footer from './components/Footer';

const Portfolio = () => (
  <div className="portfolio">
    <h1>Here's a portfolio of Vallyre Hyers</h1>
    <Header />
    <Sidebar />
    <Content />
    <Footer />
  </div>
);

export default Portfolio;
