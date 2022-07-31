import React from 'react';
import "./Cube3D.css"
import Css from '../../Assets/Css.svg'
import react from '../../Assets/React.svg'
import Html from '../../Assets/Html.svg'
import Git from '../../Assets/Git.svg'
import Js from '../../Assets/Javascript.svg'
import Redux from '../../Assets/Redux.svg'

const Cube3D = () => {
  return (
    <div className='experience__content'>
    <div id="container">
    <div id="cube">
    <div id="front" class="cube-faces flex justify-center items-center">
                <img class="React rotate-90" src={Git} height="150px" width="150px" alt="Nothing"/>
            </div>
            <div id="back" class="cube-faces flex justify-center items-center">
                <img class="React rotate-90" src={Html} height="180px" width="180px" alt="Nothing"/>

            </div>
            <div id="top" class="cube-faces flex justify-center items-center">
                <img class="React rotate-180" src={Js} height="150px"width="150px" alt="Nothing"/>

            </div>
            <div id="bottom" class="cube-faces flex justify-center items-center">
                <img class="React rotate-90" src={react} height="150px" width="150px"alt="Nothing"/>

            </div>
            <div id="left" class="cube-faces flex justify-center items-center">
                <img class="React rotate-90"  src={Css} height="150px" width="150px" alt="Nothing"/>

            </div>
            <div id="right" class="cube-faces flex justify-center items-center">
                <img class="React " src={Redux} height="150px"width="150px" alt="Nothing"/>
            </div>
    </div>
</div>
    </div> 
  )
};

export default Cube3D;
