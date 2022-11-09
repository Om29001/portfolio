import React from 'react';

export default function Myslider(props) {
   
    return <><div className="carousel slide" data-bs-ride="carousel" w-100>
        <div className="carousel-inner">
            {props.photolist.map(i => (

                i.id.toString() === "40" ?
                    <div className="carousel-item active" data-bs-interval="3000" key={i.id.toString()}>
                        <img src={require('../image/' + i.name + '.png')} className="d-block " width="500" alt="..." />
                    </div>
                    :
                    < div className="carousel-item " key={i.id.toString()} data-bs-interval="3000">
                        <img src={require('../image/' + i.name + '.png')} className="d-block " width="500" alt="..." />
                    </div>



            ))
            }

        </div>
    </div></>;
}
