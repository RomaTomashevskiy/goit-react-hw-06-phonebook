import shortid from "shortid"
import './index.css';
import PropTypes from 'prop-types';

const Filter = ({value , onChange}) => {

    const filterId = shortid.generate();

    return (
        <label htmlFor={filterId} className='filter_label'>
            Find contact by name
            <input id={filterId} type="text"
                value={value}
                onChange={onChange}
                className='filter_input' />
        </label>
    )
};


Filter.prototype = {
    value: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};



export default Filter;