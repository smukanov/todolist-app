import React from 'react';
import Counter from './Counter';
import Title from './Title';

const Header = ({doneCount, todoCount}) => {
    return (
        <div className = "Header">
            <Title/>
            <Counter active = {todoCount} done = {doneCount}/>
        </div>
    )
}

export default Header;