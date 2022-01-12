import React from 'react'
import { useState } from 'react/cjs/react.development'
import PropTypes from 'prop-types';
const AddCategory = ({ setCategories }) => {

    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (value.trim().length > 2) {
            setCategories(items => [value, ...items]);
            setValue('');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
            </form>

        </>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}

export default AddCategory;
