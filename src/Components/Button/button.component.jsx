import Button from '@material-ui/core/Button';
const TextButton = ({label,color}) => {
    return(
    <Button className={label.replace(/ /g, "_")} size="small" color={color} variant="contained">
        {label}
    </Button>
    );
}

export default TextButton;