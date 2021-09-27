import Button from 'react-bootstrap/Button';
import './CalcBtn.scss';

const CalcBtn = (props) => {
    const { children } = props;

    return (
        <Button variant="transparent">
            {children}
        </Button>
    )
}


export default CalcBtn;