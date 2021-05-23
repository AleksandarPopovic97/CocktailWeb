import React, { useState } from 'react';
import classes from './LandingPage.module.css';
import Cocktail from './Cocktail/Cocktail';
import MargaritaImg from '../../assets/cocktail2.png';
import MojitoImg from '../../assets/mojito.png';
import BloodyMary from '../../assets/bloodyMary.png';

const LandingPage = () => {
    const [count, setCount] = useState(0);
    
    const cocktails = [
        {
            naziv: 'Margarita',
            sastojci: ['Tekila', 'Liker od pomorandze', 'Limeta', 'So', 'Led'],
            karakteristike: ['Na bazi tekile', 'Citrus'],
            slika: MargaritaImg
        },
        {
            naziv: 'Mojito',
            sastojci: ['Beli rum', 'Limeta', 'Nana', 'Secer', 'Soda', 'Led'],
            karakteristike: ['Na bazi ruma', 'Citrus'],
            slika: MojitoImg
        },
        {
            naziv: 'Bloody Mary',
            sastojci: ['Votka', 'Tomato Juice', 'Limun', 'Tabasco', 'So', 'Biber', 'Celer', 'Led'],
            karakteristike: ['Istorijski', 'Zdrav'],
            slika: BloodyMary
        }
    ]
    

    const nextCocktail = () => {
        if(count!==cocktails.length-1)
            setCount(count+1);
    }

    const previousCocktail = () => {
        
        if(count!==0)
            setCount(count-1);

        
    }


    return(
        <div className={classes.LandingPage}>
            <h1>Kokteli</h1>
            <Cocktail cocktails={cocktails[count]} next={nextCocktail} prev={previousCocktail}/>
        </div>
    )

}


export default LandingPage;