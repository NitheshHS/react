import React from 'react';

function Hello(){
    // return (
    //     <div>
    //         <h1>Hello Nithesh</h1>
    //     </div>
    // );

    return React.createElement('div', null, 
    React.createElement('h1', {id:'name', className:'nameCls'}, 'Hello Nithesh Gowda'))
}

export default Hello;