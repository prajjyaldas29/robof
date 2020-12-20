import React from 'react';

const SB = ({searchChange}) => {
    return(
        <div>
            <input
                className='pa3 ba b--green bg-lightest-blue'
                type='search'
                placeholder='search robots'
                onChange={searchChange}
            
            
            />
        </div>
    );
}

export default SB;