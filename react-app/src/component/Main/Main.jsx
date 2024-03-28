import React, { useState } from 'react';
import { datamiss } from '../Data';

function Main(props) {

    const [handle, setHandle] = useState(true);
    const [idedit, setIdEdit] = useState(null);


    return (
        <div className='main'>
            {
                datamiss.map((item, index) => (
                    <div className={`box ${handle ? "" : "none"}`} key={item.id}>
                        <img src={item.img} alt="" />
                        {
                            idedit == item.id ? (
                                <input type="text" />
                            ) : (
                                <h1>{item.name}</h1>
                            )
                        }
                       
                        {
                            idedit == item.id ? (
                                <>
                                    <button>delete</button>
                                    <button onClick={() => setIdEdit(null)}>add</button>
                                </>
                            ) : (
                                <>
                                    <button onClick={() => setIdEdit(item.id)}>edit</button>
                                    <button>delete</button>

                                </>
                            )
                        }

                    </div>
                ))
            }
            <button onClick={() => setHandle(!handle)}>Save</button>
        </div>

    );
}

export default Main;