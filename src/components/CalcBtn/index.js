import Button from 'react-bootstrap/Button';
import './CalcBtn.scss';

const CalcBtn = (props) => {
    const { value, seperator, value2 } = props;

    return (
        <Button variant="transparent">
            {value}
        </Button>
    )
}


export default CalcBtn;