import Button from '@material-ui/core/Button';
import React from 'react';
import AddIcon from '@material-ui/icons/Add'
import './button.style.css';
const TextButton = ({label,color,type,buttonClick}) => {
    console.log("button component");
    return(
        
    <Button 
    className={label.replace(/ /g, "_")} size="small" color={color} variant="contained" 
    onClick={buttonClick}
    startIcon ={type === "add" ? <AddIcon /> : null}>
        {label}
    </Button>
    );
}

export default TextButton;