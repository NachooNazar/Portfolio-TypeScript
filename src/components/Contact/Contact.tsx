import '../layout.css'
import { prop } from '../../App'

const Contact = ({resumeData}:prop) => {
  let i =0;
  return (
    <section id="contact">
          <div className="conteiner-cosas">
            <div className="ten columns">
              <p className="lead">
              Feel free to contact me for any work or suggestions below
              </p>
            </div>
          </div>
          
            
              <div className="conteiner-cosas">
              {
                  resumeData.socialLinks.map((el)=>{

                    return(
                      <div className={'col-'+i++}>
                      <a href={el.url}>
                        <p>{el.name}</p>
                      </a>
                      </div>
                    )
                  })
                }
              </div>
        </section>
  )
}

export default Contact