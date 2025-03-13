import About from "./components/About";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import AchievementsHobbies from "./components/AchievementsHobbies";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col items-center justify-center px-4">
      <About />
      <Education />
      <Skills />
      <Experience />
      <Projects />
      <AchievementsHobbies />
      <Contact />
    </main>
  );
};

export default Home;