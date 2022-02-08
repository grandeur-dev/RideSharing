import React, {useState} from 'react';

import Signin from './SignIn&Up/SignIn';

function Home() {
    const [loggedIn, setLoggedIn] = useState(0);
    
    return (
        <div>
            {!loggedIn && <Signin /> }
        </div>
    );
}

export default Home;
