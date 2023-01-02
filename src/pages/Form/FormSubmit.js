import React from 'react';
 
import './FormSubmit.css'

const FormSubmit = () => {
    return (
        <div className="bg min-h-screen flex items-center text-lg p-48" >
            <h3 className='text-2xl'>Please enter your <span className='text-primary'>Name</span> <br /> <span>and pick the <span className='text-secondary'>Sectors</span> <span><br />
                you are currently involved in.</span> </span> </h3>
            <form action="" className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
                <div className="shadow">
                    <div className="flex items-center bg-transparent rounded-t-lg border-purple-500 border-b">
                        <label for="name" className="w-20 text-right mr-8 p-4 text-purple-200">Name:</label>
                        <input type="text" name="name" id="name" placeholder="Put in your name" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" />
                    </div>
                    <div className="flex items-center  rounded-t-lg border-purple-500 border-b mb-8">
                        <label for="name" className="w-20 text-right mr-8 p-4 text-purple-200">Sectors:</label>
                        <select className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none  overflow-ellipsis overflow-hidden">
                            <option disabled selected>Pick your Sectors</option>
                            <option className='text-black'>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
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




