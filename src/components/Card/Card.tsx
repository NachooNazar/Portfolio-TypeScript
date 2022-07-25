import React from 'react'
import './card.scss'
import rgb from '../../rgb.gif'
import pokemon from '../../images/pokemon.png'

interface ProjectProp {
    name: string;
    description:string;
    imgurl:string;
    url:string;
    date:string;
    technologies:Array<string>;
}

type objProp = {
    item:ProjectProp
}
const Card = ({item}:objProp) => {
  return (

    <div className="blog-card">
        <div className="meta">
        <div className="photo">
          <img src={item.name === 'Individual Project' ? pokemon :rgb} alt='projectPhoto'/>
        </div>
        <ul className="details">
            <li className="author"><a href="#">Ignacio Nazar</a></li>
         <li className="date">{item.date}</li>
            <li className="tags">
             <ul>
                {item.technologies.map(tec=><li>{tec}</li>)}
             </ul>
         </li>
        </ul>
     </div>
    <div className="description">
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <p className="read-more">
        <a href={item.url} target='_blank' rel='noreferrer'>Check it</a>
      </p>
    </div>
  </div>
  

  )
}

export default Card