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
    const { _id } = myData;

    const { register, handleSubmit, resetField, rest, formState: { errors } } = useForm();
    const [message, setMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const onSubmitHandler = user => {
        fetch('http://localhost:8000/storing', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(user)
        }).then(() => {
            console.log(`${user.name} ${user.sectors} is inserted successfully!!!`);
            toast(`${user.name} updated ${user.sectors} in to the form!!!`);
            resetField("name");
            resetField("sectors");
            resetField("checked");
            setErrorMessage('');
        }).catch(error => {
            console.error(error.message);
            toast('Insert Data failed!!!');
            setMessage('');
        });
    };

    const onFocusHandler = () => {
        setMessage('');
        setErrorMessage('');
    };


    return (
        <>
            <div className="bg min-h-screen lg:flex items-center text-lg lg:p-48" >
                <h3 className='text-2xl md:text-center'>Please enter your <span className='text-primary'>Name</span> <br /> <span>and pick the <span className='text-secondary'>Sectors</span> <span><br />
                    you are currently involved in.</span> </span> </h3>
                <form className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded" onSubmit={handleSubmit(onSubmitHandler)}>
                    <div className="shadow">
                        <div className="flex items-center bg-transparent rounded-t-lg border-purple-500 border-b">
                            <label htmlFor="name" className="w-20 text-right mr-8 p-4 text-purple-200">Name:</label>
                            <input type='text' onFocus={onFocusHandler} {...register('name', {
                                required: "Name is Required"
                            })} className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" /><br />
                            {errors.name && <p className='text-purple-500'>{errors.name.message}</p>}
                        </div>
                    </div>
                    <div className="flex items-center  rounded-t-lg border-purple-500 border-b mb-8 ">
                        <label htmlFor="sectors" className="w-20 text-right mr-8 p-4 text-purple-200">Sectors:</label>
                        <select className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none  overflow-ellipsis overflow-hidden" required onFocus={onFocusHandler} {...register("sectors")} {...rest}>
                            {
                                myData.map(data =>

                                    <option className="text-green-700 flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none  overflow-ellipsis overflow-hidden" value={data.value}>{data.text}</option>

                                )
                            }
                        </select>


                    </div>
                    <div class="mb-4">
                        <label class="block">
                            <input required name='checked' className="w-20 text-right mr-8 p-4 text-purple-200" type="checkbox" onFocus={onFocusHandler} {...register('checked')} />
                            <span class="text-lg text-purple-200">
                                Agree to terms
                            </span>
                        </label>
                    </div>
                    {/* <Link to='/display'>
                        <input type="submit" value='submit' className=" btn-primary block w-full rounded py-4 text-white font-bold shadow" />
                    </Link> */}

                    <button className=" btn-primary block w-full rounded py-4 text-white font-bold shadow" type="submit">Submit</button>
                    <br />
                    <Link to={"/display"}><button className=" btn-secondary  text-center text-white font-bold shadow">Edit Your Data</button></Link>
                </form>
                <p style={{ color: "pink" }}>{message}</p>
                <p style={{ color: "orange" }}>{errorMessage}</p>
            </div>
        </>
    );
};

export default FormSubmit;














