import { Select } from '@mobiscroll/react';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLoaderData, useNavigate, useParams } from 'react-router-dom';

const FormEdit = () => {
    const { register, handleSubmit } = useForm();
    const storedData = useLoaderData();
    const navigate = useNavigate();

    const onUpdateHandler = user => {
        fetch(`https://jobtask-server-riadleon.vercel.app/storing/${storedData._id}`, {
            method: 'PUT',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(() => {
            toast(`${user.name} ${user.sectors} is updated successfully!!!`);
            navigate("/");
        }).catch(err => console.log(err));
    };


    return (
        <div>

            <div className="bg min-h-screen flex items-center text-lg lg:p-48" >
                <form className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded" onSubmit={handleSubmit(onUpdateHandler)}>
                    <div className="shadow">
                        <div className="flex items-center bg-transparent rounded-t-lg border-purple-500 border-b">
                            <label htmlFor="name" className="w-20 text-right mr-8 p-4 text-purple-200">Name:</label>
                            <input
                                defaultValue={storedData.name}
                                {...register('name')}
                                className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" /><br />

                        </div>
                    </div>
                    <div className="flex items-center bg-transparent rounded-t-lg border-purple-500 border-b">
                        <label htmlFor="name" className="w-20 text-right mr-8 p-4 text-purple-200">Sectors:</label>
                        <input
                            defaultValue={storedData.sectors}
                            {...register('sectors')}
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" /><br />

                    </div>




                    <button className=" btn-primary block w-full rounded py-4 text-white font-bold shadow" type="submit">Update</button>

                </form>
            </div>
        </div>
    );
};

export default FormEdit;