import './App.css';
import Blog from './components/Blogs';
import CarouselText from './components/CarouselText';
import HeaderCarousel from './components/HeaderCarousel';
import Nav from './components/Nav';
import Projects from './components/Projects/Projects';
import Services from './components/Services';
import SkillsPage from './components/Skills/SkillsPage';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <HeaderCarousel></HeaderCarousel>
      <CarouselText></CarouselText>
      <Services></Services>
      <Blog></Blog>
      <SkillsPage></SkillsPage>
    <Projects></Projects>
     
    </div>
  );
}

export default App;
