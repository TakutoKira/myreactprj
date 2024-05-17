import React from 'react';

function Counter({message = "DummyUserName"}){
    return(
        <div>
            <p>Hello,{message}</p>
        </div>
    );
}

export default Counter;