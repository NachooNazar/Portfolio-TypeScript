import logo from './logo.svg';
import NavBar from './components/NavBar/NavBar';
import resumeData from './resumeData';


export interface propType {
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
    work:Array<string>;
    skillsDescription: string;
    skills:Array<{
      skillname:string;
    }>;
    portfolio: Array<{
      name:string;
      description:string;
      imgurl:string;
      url:string;
    }>;
}

export type prop = { resumeData: propType}

function App() {
  return (
      <NavBar resumeData={resumeData} />
  );
}

export default App;
