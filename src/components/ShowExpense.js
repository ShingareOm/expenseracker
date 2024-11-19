import Table from 'react-bootstrap/Table';

function StripedColumnsExample() {
    return (
        <Table striped="columns">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Expense Text</th>
                    <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>Eggs</td>
                    <td>60</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>600</td>
                </tr>
            </tbody>
        </Table>
    );
}

export default StripedColumnsExample;