import React, { useState } from 'react';
import { Select } from '@mobiscroll/react'; /* or import any other component */
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import Select from "react-select";
import './FormSubmit.css'
import { useLoaderData } from 'react-router-dom';


const FormSubmit = () => {
    const myData = useLoaderData([]);
    console.log(myData);



    return (
        <div className="bg min-h-screen flex items-center text-lg p-48" >
            <h3 className='text-2xl'>Please enter your <span className='text-primary'>Name</span> <br /> <span>and pick the <span className='text-secondary'>Sectors</span> <span><br />
                you are currently involved in.</span> </span> </h3>
            <form action="" className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
                <div className="shadow">
                    <div className="flex items-center bg-transparent rounded-t-lg border-purple-500 border-b">
                        <label for="name" className="w-20 text-right mr-8 p-4 text-purple-200">Name:</label>
                        <input required type="text" name="name" id="name" placeholder="Put in your name" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" />
                    </div>
                    <div className="flex items-center  rounded-t-lg border-purple-500 border-b mb-8 ">
                        <label for="sectors" className="w-20 text-right mr-8 p-4 text-purple-200">Sectors:</label>
                        <Select
                            data={myData}
                            touchUi={false}
                            name={myData.value}
                            className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none  overflow-ellipsis overflow-hidden" >

                        </Select>

                    </div>
                    <div class="mb-4">
                        <label class="block">
                            <input className="w-20 text-right mr-8 p-4 text-purple-200" type="checkbox" />
                            <span class="text-lg text-purple-200">
                                Agree to terms
                            </span>
                        </label>
                    </div>

                </div>
                <button className=" btn-primary block w-full rounded py-4 text-white font-bold shadow">Submit</button>

            </form>
        </div>
    );
};

export default FormSubmit;




