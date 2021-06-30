import Button from '@material-ui/core/Button';
import './button.style.css';
const TextButton = ({label,color}) => {
    return(
        
    <Button className={label.replace(/ /g, "_")} size="small" color={color} variant="contained">
        {label}
    </Button>
    );
}

export default TextButton;