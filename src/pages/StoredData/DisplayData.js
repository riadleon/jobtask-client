import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const DisplayData = () => {
    const [displayStores, setdisplayStores] = useState(useLoaderData());
    return (
       <div className="bg min-h-screen justify-center  items-center text-lg pl-96 pt-10">
            <h2 className='text-3xl pl-12 pb-5'>Your Information</h2>
           
            {
                displayStores.map((user, i) => <tr key={user._id}>
                    <th>{i + 1}</th>

                    <td>{user.name}</td>
                    <td>{user.sectors}</td>

                    <td>
                        <label htmlFor="confirmation-modal" className="btn btn-sm btn-primary">Edit</label>
                    </td>
                </tr>)
            }
       </div>
    );
};

export default DisplayData;

