import React from 'react';
import gridStyles from '../styles/grid.module.css';

const ShowTags = (e) =>{
    
  /*  gridStyles.insideGrid = {
        display: 'block',
        border: '8px solid black',
        backgroundColor: 'white',
        opacity : '0.5',
        width : '100%',
        height : '100%',
        textAlign: 'center',
        padding: '0px'
        
    }
*/
  e.target.style.opacity = '0.7';
  e.target.style.animationName = `slide`;
  e.target.style.animationDuration = `1s`;
 // e.target.style.transition = `opacity 3s ease-in-out`;

}


const DontShowTags = (e) =>{
    e.target.style.opacity = '0';
   // e.target.style.transition = `opacity 3s`;
}


const GridItem = (props) =>{
    return(
        <div className = {gridStyles.insideGrid} onMouseEnter = {ShowTags}  onMouseLeave = {DontShowTags}> 
            <h1 className = {gridStyles.header}>{props.header}</h1>
            <p>{props.description}</p>
        </div>
    )
}

export default GridItem;