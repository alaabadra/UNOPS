import React from 'react';
import HomeAll from './tickets-home-all';
import HomeMy from './tickets-home-my';
import HomeDraft from './tickets-home-draft';
import HomeTrash from './tickets-home-trash';

export default({match : {params : { category, status},}}) => {
    switch(category){
        case 'all':
            return <HomeAll status = {status}/>
        case 'my':
            return <HomeMy status = {status}/>
        case 'draft':
            return <HomeDraft />
        case 'trash':
            return <HomeTrash />
        default :
            return <React.Fragment />        
    }
}