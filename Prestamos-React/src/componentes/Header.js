import React from 'react';
// function Header (props) {
//     console.log(props);
//     return(
//         <h1>{props.titulo}</h1>
//     )
// }

// function Header ({titulo}) {
//     return(
//         <Fragment>
//             <h1>{titulo}</h1>
//         </Fragment>
//     )
// }

const Header = ({titulo}) => (         
        <h1>{titulo}</h1>
    );

export default Header;