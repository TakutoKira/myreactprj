import React from 'react';

function Greetings({message = "DummyUserName"}){
    return(
        <div>
            <p>Hello,{message}</p>
        </div>
    );
}

export default Greetings;