import { motion } from 'framer-motion';
import React from 'react'
import Typewriter from 'typewriter-effect';
import Projectcard from '../comp/Projectcard';

export default function Projectpage(props) {
    const listItems = props.projectlist[0].map((number) => number);

    const Projectlist1 = listItems.map((i) =>
        <div className="col py-3" key={i._id}>
            <motion.div whileHover={{ scale: 1.1 }} className="h-100">
                <Projectcard
                language ={<Typewriter  options={{
                    strings: i.language,
                    autoStart: true,
                    loop: true,
                }}/> }
                link ={i.link}
                title={i.title}
                about={i.about}
                />
            </motion.div>
        </div>
    );

    return (
        <>
            {Projectlist1}
        </>
    )
}
