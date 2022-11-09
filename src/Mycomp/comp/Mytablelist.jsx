import React from 'react'

export default function Mytablelist(props) {
    let n = 0;
    const Msglist = props.map((i) =>
        <>
            <tr>
                <th scope="row" key={i.id}>{n = n + 1}</th>
                <td>{i.name}</td>
                <td>{i.mail}</td>
                <td>{i.message}</td>
            </tr>
        </>
    );

    return Msglist;
}
