import '../layout.css'
import { prop } from '../../App'

const Footer = ({resumeData}:prop) => {
  return (
    <footer>
    <div className="row">
      <div className="eigth columns footer-widgets">
        
        <ul className="social-links">
          
          {
            resumeData.socialLinks && resumeData.socialLinks.map((item)=>{
              return(
              
                <li>  
                  <a href={item.url}>
                  <p>{item.name}</p>
                  <i className={item.className} />
                  </a>
                </li>
              )
            })
          }
        </ul>
        
      </div>
      <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
    </div>
  </footer>
  )
}

export default Footer