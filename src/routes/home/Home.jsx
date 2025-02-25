import Archive from "../../components/archive/Archive";
import MainImage from "../../components/mainImg/MainImg";
import About from "../../components/about/About";
import Resume from "../../components/resume/Resume";
import Contact from "../../components/contact/Contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <MainImage />
      <Archive />
      <About />
      <Resume />
      <Contact />
    </div>
  );
}
