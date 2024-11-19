import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function InputReadOnlyExample(props) {
    return (
        <>

            <Form.Control type="number" onChange={props.changeInputExpense} placeholder="Enter expense here" />
            <Button variant="primary" size="lg" onClick={props.handelClickExpense} >
                Add Expense (either +vr or -ve)
            </Button>
        </>


    );
}

export default InputReadOnlyExample;