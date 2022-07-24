import '../layout.css'
import { prop } from '../../App'
import Card from '../Card/Card'

const Portfolio = ({resumeData}:prop) => {
  return (
    <section id="portfolio">
    <div className="row">
      <div className="twelve columns collapsed">
        <h1>Check Out Some of My Works.</h1>
        <div
          id="portfolio-wrapper"
          className="bgrid-quarters s-bgrid-thirds cf"
        >
          {resumeData.portfolio &&
            resumeData.portfolio.map((item) => <Card item={item}/>)}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Portfolio