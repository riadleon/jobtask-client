import React, { useState } from 'react';
import { Select } from '@mobiscroll/react'; /* or import any other component */
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import Select from "react-select";
import './FormSubmit.css'
import { Link, useLoaderData } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';


const FormSubmit = () => {
    const myData = useLoaderData([]);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;

        const name = form.name.value;
        const sectors = form.sectors.value;
        const checked = form.checked.value;


        const storeData = {
            clientName: name,
            sectors,
            checked

        }


        fetch('http://localhost:8000/storing', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(storeData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {

                    toast.success('Data Stored confirmed');

                }
                else {
                    toast.error(data.message);
                }
            })


    }



    return (
        <div className="bg min-h-screen flex items-center text-lg p-48" >
            <h3 className='text-2xl'>Please enter your <span className='text-primary'>Name</span> <br /> <span>and pick the <span className='text-secondary'>Sectors</span> <span><br />
                you are currently involved in.</span> </span> </h3>
            <form onSubmit={handleSubmit} className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
                <div className="shadow">
                    <div className="flex items-center bg-transparent rounded-t-lg border-purple-500 border-b">
                        <label for="name" className="w-20 text-right mr-8 p-4 text-purple-200">Name:</label>
                        <input required type="text" name="name" id="name" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" />

                    </div>
                    <div className="flex items-center  rounded-t-lg border-purple-500 border-b mb-8 ">
                        <label for="sectors" className="w-20 text-right mr-8 p-4 text-purple-200">Sectors:</label>
                        <Select
                            data={myData}
                            touchUi={false}
                            // error={true} errorMessage="Must Choose One"
                            name="sectors"
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none  overflow-ellipsis overflow-hidden" >

                        </Select>


                    </div>
                    <div class="mb-4">
                        <label class="block">
                            <input required name='checked' className="w-20 text-right mr-8 p-4 text-purple-200" type="checkbox" />
                            <span class="text-lg text-purple-200">
                                Agree to terms
                            </span>
                        </label>
                    </div>

                </div>
                <Link to='/edit'>
                    <input type="submit" value='Save' className=" btn-primary block w-full rounded py-4 text-white font-bold shadow" />
                </Link>

            </form>
        </div>
    );
};

export default FormSubmit;




