import React, { useEffect, useState } from 'react';
import Dynimickcollagedata from './Dynimickcollagedata';

const Collages = () => {

    const [Collagesdata,setCollagesdata]=useState([])

    useEffect(() => {
        fetch(`https://collage-servises-server.vercel.app/carddata`)
          .then((res) => res.json())
          .then((data) => setCollagesdata(data));
      }, []);


    return (
        <div className='grid  md:grid-cols-2 gap-3 p-10 bg-site'>
            {Collagesdata.map(Collagesdat =><Dynimickcollagedata key={Collagesdat.id} Collagesdat={Collagesdat}></Dynimickcollagedata>)}
        </div>
    );
};

export default Collages;