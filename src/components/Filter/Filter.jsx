import PropTypes from 'prop-types';
import { Formik, Form, Field } from 'formik';
import {LabelForm} from './Filter.styled';
// import Form from 'react-bootstrap/Form';



const initialValues = {
  filter: '',
}

export const Filter = ({onChange}) => {
    return (
      //   <Form>
      //   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      //     <Form.Label>Finds contacts by name</Form.Label>
      //     <Form.Control onChange={onChange} type="text" name="filter" placeholder="name" />
      //   </Form.Group>
       
      // </Form>
    
      <Formik>
<Form initialValues={initialValues}>
  <LabelForm htmlFor="">Finds contacts by name
    <Field onChange={onChange} type="text" name="filter" placeholder="name" />
  </LabelForm>
</Form>
</Formik>
    )
        

}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}