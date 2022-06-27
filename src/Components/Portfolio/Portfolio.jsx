import React from 'react'
import './Portfolio.css'
import IMG1 from "../../Assets/portfolio1.jpg"
import IMG2 from "../../Assets/portfolio2.jpg"
import IMG3 from "../../Assets/portfolio3.jpg"
import IMG4 from "../../Assets/portfolio4.jpg"
import IMG5 from "../../Assets/portfolio5.png"
import IMG6 from "../../Assets/portfolio6.jpg"

const Portfolio = () => {
  
  const data=[
    {
      id:1,
      image:IMG1,
      title:"SkillUp the skill oriented website",
      github:"https://github.com/Parassharma1999",
      demo:"https://github.com/Parassharma1999"
    },
  
  {
      id:2,
    image:IMG2,
    title:"SkillUp the skill oriented website",
    github:"https://github.com/Parassharma1999",
    demo:"https://github.com/Parassharma1999"
  },

  {
    id:3,
  image:IMG3,
  title:"SkillUp the skill oriented website",
  github:"https://github.com/Parassharma1999",
  demo:"https://github.com/Parassharma1999"
  },

  {
    id:4,
  image:IMG4,
  title:"SkillUp the skill oriented website",
  github:"https://github.com/Parassharma1999",
  demo:"https://github.com/Parassharma1999"
},

  ]




  return (
    <section id="portfolio">
      <h5>My Recent Projects</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container" >
     {
      data.map((item)=>{
        return(
          <article className="portfolio__item" key={item.id}>
            <div className="portfolio__item-image">
              <img src={item.image} alt="pic"/>
            </div>
            <h3>{item.title}</h3>
            <div className="portfolio__item-cta">
            <a href={item.github} className='btn'  target="_blank">Github</a>
            <a href={item.demo} className='btn btn-primary' target="_blank">Live Demo</a>
            </div>
          </article>
        )
      })
    }
    </div>
    </section>
  )
}

export default Portfolio