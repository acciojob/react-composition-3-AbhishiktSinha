import React from "react";
import { useState } from "react";
import TooltipContent from './TooltipContent.js'

const Tooltip = (props)=>{
    const {tooltipText, children} = props;
    const [showTooltip, setShowTooltip] = useState(false);

    function mouseEnterHandler() {
        setShowTooltip(true);
    }
    function mouseLeaveHandler() {
        setShowTooltip(false);
    }

    return (
        <div 
            className="tooltip" 
            style={{position: 'relative'}}
            onMouseEnter={mouseEnterHandler}
            onMouseLeave={mouseLeaveHandler}
            >
            
            {showTooltip && <TooltipContent tooltipText={tooltipText}/>}
            
            {children}

        </div>
    )

}

export default Tooltip;