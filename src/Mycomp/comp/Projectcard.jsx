import React from 'react'


export default function Mycard(props) {
    return (
        <div  whileHover={{scale:1.1}} className="card h-100 text-center rounded border-2 bg-light bg-gradient" style={{ boxShadow: " 10px 10px 8px grey" }}>
                <div className="card-header d-flex  pb-0 " >
                    <i className="fa fa-circle w-2" aria-hidden="true" style={{ color: "red" }}></i>
                    <i className="fa fa-circle w-2" aria-hidden="true" style={{ color: "yellow" }}></i>
                    <i className="fa fa-circle w-2" aria-hidden="true" style={{ color: "green" }}></i>
             &nbsp;<b ClassName="h4">{props.language}</b>   
                </div>
                <div className="card-body z-depth-1 text-white bg-dark">
                    <h5 className="card-title text-success "><a href={props.link} target="_blank" rel="noreferrer"><b>
                        {props.title}
                        </b></a></h5>
                    <p className="card-text">
                        {props.about}
                    </p>
                    {/* <a href="  " className="btn btn-primary">To Website</a> */}

                </div>
            </div>
    )
}
