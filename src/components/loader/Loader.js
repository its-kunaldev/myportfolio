import React from 'react'

import './Loader.css';

const Loader = () => {
    return(
        <section className='loader-effect'>
            <img src={require("../../assests/animations/loading.gif")} alt="" />
        </section>
    )
}

export default Loader;