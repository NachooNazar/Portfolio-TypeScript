import logo from './logo.svg';
import './default.css'
import NavBar from './components/NavBar/NavBar';
import About from './components/About/About'
import resumeData from './resumeData';
import Resume from './components/Resume/Resume';
import Contact from './components/Contact/Contact';
import Portfolio from './components/Projects/Portfolio';
import Footer from './components/Footer/Footer';

interface propType {
  name: string;
    role: string;
    linkedinId: string;
    skypeid: string;
    roleDescription: string;
    socialLinks: Array<{
        name: string;
        url: string;
        className: string;
    }>;
    aboutme: string;
    address: string;
    website: string;
    education: Array<{
      UniversityName:string;
      specialization:string;
      MonthOfPassing:string;
      YearOfPassing:string;
      Achievements:string;
    }>;
    work?:Array<{
      companyName:string;
      specialization:string;
      MonthOfLeaving:string;
      MonthOfPassing:string;
      YearOfLeaving:string;
      YearOfPassing:string;
      Achievements:string;
    }>;
    skillsDescription: string;
    skills:Array<{
      skillname:string;
    }>;
    portfolio: Array<{
      name:string;
      description:string;
      imgurl:string;
      url:string;
      date:string;
      technologies:Array<string>;
    }>;
}

export type prop = { resumeData: propType}

function App() {
  return (
    <div className='conteiner-main'>
      <NavBar resumeData={resumeData} />
      <About resumeData={resumeData}/>
      <Resume resumeData={resumeData}/>
      <Portfolio resumeData={resumeData} />

      <Contact resumeData={resumeData}/>
      {/* <Footer resumeData={resumeData}/>  */}
      </div>
  );
}

export default App;
