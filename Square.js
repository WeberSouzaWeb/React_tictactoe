import Button from '@mui/material/Button';

export default function Square(props) {
    const { value, onSquareClick} = props;
    return (
        <Button className="square" onClick={onSquareClick} variant="outlined">
            {value} 
        </Button>
        
    );
}
