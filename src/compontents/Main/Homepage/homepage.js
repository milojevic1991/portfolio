import React from 'react';
import classes from './homepage.module.css';
import map from '../../../assets/Images/mapImg.png' 

const Homepage = () => {
   return (
      <>
      <div className ={classes.homepage} >
         <div className ={classes.headerSection} > 
            <div className ={classes.mainCircles} >
                  <div className={classes.circleImg}>
                     <img src={map}></img>
                      </div>
                  <div className ={classes.smallPurpleCircle} > </div>
                  <div className ={classes.bigBlackCircle}> </div>

                  {/* <div className={classes.circleImg}>
                     <img src={map}></img>
                      </div> */}


            </div>
            <h1>Neki tekst ovde.</h1>
       
         </div>
         <div className ={classes.about} >

<div className ={classes.aboutText}>
<h2>Ćao, ja sam Nemanja.</h2>
<p>Ovde neki tekst, nesto bezveze o meni , bla bla.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
</div>
</div>
      </div>
   </>
   );
};

export default Homepage;