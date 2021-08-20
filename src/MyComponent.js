import React from 'react';
import PropTypes from 'prop-types';

const MyComponent = ({name, favoriteNumber, children}) => {
    return (
        <>
    {name},{children},{favoriteNumber}    
        </>
    )
}

MyComponent.defaultProps = {
    name : '기본이름'
}

MyComponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber: PropTypes.number.isRequired
}

export default MyComponent;