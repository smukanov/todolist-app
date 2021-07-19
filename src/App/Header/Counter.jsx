import React from 'react';

const Counter = ({active, done}) => {
    return (
        <div className = "Counter">
            {active} more to do, {done} done!
        </div>
    )
}

export default Counter;