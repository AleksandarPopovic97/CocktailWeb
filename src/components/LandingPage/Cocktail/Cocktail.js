import React, { useState } from 'react';
import classes from './Cocktail.module.css';
import png from '../../../assets/cocktail2.png';
import {FaThinkPeaks} from 'react-icons/fa';


const Cocktail = (props) => {


    const [hover, setHover] = useState(false);

    const onHover = () => {
        console.log(hover);
        if(hover===false)
            setHover(true)
    }

    const onHoverLeave = () => {
        if(hover===true){
            setHover(false);
        }
    
    }
    console.log()

    return (


        <div className={classes.Main}>
            <div className={classes.Characteristics}>
                <h2>Sastojci:</h2>
                {hover?
                <ul className={classes.List}>
                    {props.cocktails.sastojci.map((sastojak) => {
                        return <li key={sastojak} className={classes.ListItem}>{sastojak}</li>
                    })}
                </ul>
                :null}
            </div>
            <div className={classes.Cocktail}>
                <div className={classes.Container}>
                    <h2>{props.cocktails.naziv}</h2>
                    <img src={props.cocktails.slika} onMouseEnter={onHover} onMouseLeave={onHoverLeave}/>
                    <div className={classes.Next} onClick={props.next}><FaThinkPeaks/></div>
                    <div className={classes.Previous} onClick={props.prev}><FaThinkPeaks/></div>
                </div>
            </div>
            <div className={classes.Characteristics}>
                <h2>Opis:</h2>
                {hover?
                <ul className={classes.List}>
                    {props.cocktails.karakteristike.map((karakteristika) => {
                        return <li key={karakteristika} className={classes.ListItem}>{karakteristika}</li>
                    })}
                </ul>
                :null}
            </div>
        </div>

    )
}


export default Cocktail;