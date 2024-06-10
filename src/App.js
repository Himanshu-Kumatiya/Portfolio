import './App.css';
import { About } from './components/about/About';
import { Contact } from './components/contact/Contact';
import { Education } from './components/education/Education';
import { Footer } from './components/footer/Footer';
import { Header } from './components/header/Header';
import { Nav } from './components/nav/Nav';
import { Project } from './components/project/Project';
import { Skills } from './components/skills/Skills';
import AnimatedCursor from "react-animated-cursor"
function App() {
  return (
    <div className='app'>
      <AnimatedCursor
        innerSize={22}
        outerSize={28}
        color='113, 111, 111'
        outerAlpha={0.2}
        innerScale={0.7}
        outerScale={2}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link',
          {
            target: '.custom',
            options: {
              innerSize: 6,
              outerSize: 6,
              color: '255, 255, 255',
              outerAlpha: 0.3,
              innerScale: 0.7,
              outerScale: 2
            }
          }
        ]}
      />
      <Nav />
      <Header />

      <About />
      <Education />
      <Skills />
      <Project />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
