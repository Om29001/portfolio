import React from 'react';
import Mybutton from './comp/Mybutton'

export default function Error() {
    return <div>
        <div >
            <center className="m-5">
            <h1 style={{fontSize:"10vw"}}> OoPs!!</h1>
            <h1 style={{fontSize:"2vw"}}>404 Not Found</h1>
                <p>THE PAGE YOU ARE LOOKING FOR MIGHT HAVE BEEN REMOVED <br/> HAD ITS NAME CHANGED OR IS TEMPORARILY UNAVAILABLE.</p>
            <a href="/"><Mybutton name="Back to Home" /></a>
            
            </center>
        </div>
    </div>;
}
