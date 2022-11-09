import React, { useEffect, useState } from 'react'
// import { useHistory } from 'react-router-dom';
import Mytablelist from './comp/Mytablelist';


export default function Admin() {

    const [cerlink, setCerlink] = useState({title:"",about:"",link :""});
    const [proindata, setProindata] = useState({
        language: "",
        title: "",
        about: "",
        link: ""
    })

    const [value, setValue] = useState(1);
    const [mdata, setMdata] = useState();

    let name, value1;
    const handleChange = (e) => {
        console.log(e);
        name = e.target.name;
        value1 = e.target.value;
        setProindata({ ...proindata, [name]: value1 });


    }
    const handleLink = (e) => {
        setCerlink({...cerlink, [e.target.name] : e.target.value})
    }

    const handleChange1 = (e) => {
        console.log(e);
        setValue(e.target.value);

    }

    const admindata = async (e) => {
        try {
            const res = await fetch('/admin/view'
                , {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                }
            );

            const data = await res.json();;
            setMdata(data);

        }
        catch (err) {
            console.log(err);
        }
    }
    const handleOm = async (e) => {
        e.preventDefault();
        const { language, title, about, link } = proindata;

        const res = await fetch("/admin/project", {
            method: "POST", headers: { 'Content-Type': 'application/json' }
            ,
            body: JSON.stringify({ language, title, about, link })
        });
        const data = await res.json();
        console.log(data)
        if (res.status === 422 || !data) {
            window.alert("Please fill the form")
        } else {
            setProindata({title:"",about:"",link :""});
            window.alert("Well New Project Added Bro");
        }
    }


    const imageUpload = async (e) => {
        e.preventDefault();
        const { title , about, link } = cerlink;
        const res = await fetch("/admin", {
            method: "POST", headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({title , about, link})
        });
        
        if (res.status === 422 || !cerlink) {
            window.alert("Please fill the form")
        } else {
            setCerlink({title:"",about:"",link :""});
            window.alert("Well New Certificate Added Bro");
        }
    }

    useEffect(() => {
        admindata();
    }, [mdata])



    return (
        <>
            <div className="container my-5 py-5">

                <section className="px-md-5 mx-md-5 dark-grey-text text-left text-lg-left">
                    <form method='POST'>
                        {/* <Select options={options} onChange={handleChange}/> */}
                        <select className="form-select" aria-label="Default select example" value={value} onChange={handleChange1}>
                            <option value={1} selected>Project</option>
                            <option value={2}>Certificate</option>
                            <option value={3}>View</option>
                        </select>
                        <hr />
                        {value === 1 &&

                            <>
                                <div className="form-outline">
                                    <label className="form-label" for="typeText">Language</label>
                                    <input type="text" id="typeText" className="form-control" value={proindata.language} name="language" onChange={handleChange} />

                                </div>
                                <div className="form-outline">
                                    <label className="form-label" for="typePassword">title</label>
                                    <input type="text" id="typePassword" className="form-control" value={proindata.title} name="title" onChange={handleChange} />

                                </div>

                                <div className="form-outline">
                                    <label className="form-label" for="typePassword">about</label>
                                    <input type="text" id="typePassword" className="form-control" value={proindata.about} name="about" onChange={handleChange} />

                                </div>
                                <div className="form-outline">
                                    <label className="form-label" for="typePassword">link</label>
                                    <input type="text" id="typePassword" className="form-control" value={proindata.link} name="link" onChange={handleChange} />

                                </div>
                                <br/>
                                <button type="submit" className="btn bg-primary bg-gradient text-white  col-12 " onClick={handleOm}>Send</button>
                            </>
                        }
                        {value === 2 &&
                            <>
                            <div className="form-outline">
                                    <label className="form-label" for="typePassword">Title</label>
                                    <input type="text" id="typePassword" className="form-control" value={cerlink.title} name="title" onChange={handleLink} />
                                    <br/>
                                    
                                </div>
                                <div className="form-outline">
                                    <label className="form-label" for="typePassword">About</label>
                                    <input type="text" id="typePassword" className="form-control" value={cerlink.about} name="about" onChange={handleLink} />
                                    <br/>
                                    
                                </div>

                                <div className="form-outline">
                                    <label className="form-label" for="typePassword">link</label>
                                    <input type="text" id="typePassword" className="form-control" value={cerlink.link} name="link" onChange={handleLink} />
                                    <br/>
                                    
                                </div>
                                <button type="submit" className="btn bg-primary bg-gradient text-white  col-12 " onClick={imageUpload}>Send</button>

                            </>
                        }
                        {value === 3 &&

                            <>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">Sr. no.</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Mail</th>
                                            <th scope="col">Message</th>
                                            <th scope="col">Delete wala button daba</th>
                                        </tr>
                                    </thead>

                                    <tbody>

                                        {Mytablelist(mdata)}
                                    </tbody>
                                </table>
                            </>
                        }
                    </form>
                </section>
            </div>


        </>
    )
}
