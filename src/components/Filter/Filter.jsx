import PropTypes from 'prop-types';
import {LabelForm, InputForm} from './Filter.styled';

export const Filter = ({onChange}) => {
    return (
  <LabelForm>Finds contacts by name
    <InputForm onChange={onChange} type="text" name="filter" placeholder="name" />
  </LabelForm>
    )
}

Filter.propTypes = {
  onChange: PropTypes.func.isRequired,
}