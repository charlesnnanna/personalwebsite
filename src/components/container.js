import React from 'react';
import containerStyles from './container.module.css';

const container = ({children}) => {
    return (
        <div className = {containerStyles.container}>
            {children}
            <p>This is the Container CSS module</p>
        </div>
    )
}

export default container;