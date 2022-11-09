import React from 'react'
import { Link, useHistory } from 'react-router-dom'
export default function (props) {
    const history = useHistory();
    function chpage(){
        history.push('/mystory/' + props.id)}

    return (
        <>
        <div className="mx-5 ">
            <div className="card  mx-5 bg-light border-0" >
                <img src={require("../image/blog_images/" + props.name + ".png")} height="500" className="card-img-top border-1 shadow-sm" alt="..." />
                <div className="card-body
                 ">
                    <h1 className="card-title ">      {props.title}</h1>
                    <p className="card-text"><h6>{props.about}</h6></p>

                    <br />
                    <h5 className="blockquote-footer font-italic ">{props.author}<br />
                        {props.date}</h5>


                    <a onClick = {chpage}
                        className="btn btn-outline-primary btn-lg py-12">Read More</a>

                </div>
            </div>

            </div>
        </>
    )
}
