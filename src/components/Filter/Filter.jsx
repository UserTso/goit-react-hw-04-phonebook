import Form from 'react-bootstrap/Form';

export const Filter = ({onChange}) => {
    return (
        <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Finds contacts by name</Form.Label>
          <Form.Control onChange={onChange} type="text" name="filter" placeholder="name" />
        </Form.Group>
       
      </Form>
    )
        

}


// onChange = (event) => {
//     event.preventDefault();
//     this.setState({name: event.target.value})
//     console.log(event)
//     }