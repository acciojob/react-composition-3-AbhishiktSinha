import React from 'react';
import TooltipContentStyle from '../styles/TooltipContentStyle.css'


const TooltipContent = ({tooltipText})=> {
    console.log(tooltipText);
    
    return (
        <div className='tooltiptext'>{tooltipText}</div>
    )
}

export default TooltipContent;