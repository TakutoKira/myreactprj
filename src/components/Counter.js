import React, { useState } from 'react';

function Counter(){
    const [count,setCount] = useState(0);
    return(
        <p>
            {count}
            <button onClick={() =>setCount(count => count+1)}>plus</button>
        </p>
    );
}

export default Counter;