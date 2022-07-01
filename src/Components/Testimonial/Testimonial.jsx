import React from "react";
import "./Testimonial.css";
import avatar1 from "../../Assets/avatar1.jpg";
import avatar2 from "../../Assets/avatar2.jpg";
import avatar3 from "../../Assets/avatar3.jpg";
import avatar4 from "../../Assets/avatar4.jpg";
const Testimonial = () => {
  return (
    <section id="testinomial">
      <h5>Review From Clients</h5>
      <h2>Testinomial</h2>
      <div className="container testinomials__container">
        <article className="testinomial">
          <div className="client__avatar">
            <img src={avatar1} alt="avatar" />
          </div>
          <h5 className="client__name">Paras Kumar</h5>
          <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            fugit nemo doloribus consectetur iste obcaecati, fuga tempora ipsa
            necessitatibus laborum praesentium placeat, assumenda numquam iure
            illo architecto fugiat itaque maiores!
          </small>
        </article>

        
        <article className="testinomial">
        <div className="client__avatar">
          <img src={avatar1} alt="avatar" />
        </div>
        <h5 className='client__name'>Paras Kumar</h5>
           <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugit nemo doloribus consectetur iste obcaecati, fuga tempora ipsa necessitatibus laborum praesentium placeat, assumenda numquam iure illo architecto fugiat itaque maiores!
           </small>
        </article> 


        <article className="testinomial">
        <div className="client__avatar">
          <img src={avatar1} alt="avatar" />
        </div>
        <h5 className='client__name'>Paras Kumar</h5>
           <small className="client__review">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit fugit nemo doloribus consectetur iste obcaecati, fuga tempora ipsa necessitatibus laborum praesentium placeat, assumenda numquam iure illo architecto fugiat itaque maiores!
           </small>
        </article> 
      </div>
    </section>
  );
};

export default Testimonial;
