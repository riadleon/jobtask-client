import React from 'react';
import bg from '../../assets/bg.png';

const FormSubmit = () => {
    return (
        <div className="bg-purple-600 min-h-screen flex items-center text-lg" style={{ backgroundImage: `url{bg}` }}>
            <h3 className='text-2xl'>Please enter your name and pick the Sectors you are currently involved in.</h3>
            <form action="" className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
                <div className="shadow">
                    <div className="flex items-center bg-purple-400 rounded-t-lg border-purple-500 border-b">
                        <label for="name" className="w-20 text-right mr-8 p-4 text-purple-200">Name</label>
                        <input type="text" name="name" id="name" placeholder="Put in your name" className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" />
                    </div>
                    <div className="flex items-center bg-purple-400 rounded-t-lg border-purple-500 border-b">
                        <label for="name" className="w-20 text-right mr-8 p-4 text-purple-200">Sectors</label>
                        <select className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none  overflow-ellipsis overflow-hidden">
                            <option disabled selected>Pick your Sectors</option>
                            <option>Homer</option>
                            <option>Marge</option>
                            <option>Bart</option>
                            <option>Lisa</option>
                            <option>Maggie</option>
                        </select>
                    </div>
                    <div class="mb-4">
                        <label class="block">
                            <input className="w-20 text-right mr-8 p-4 text-purple-200" type="checkbox" />
                            <span class="text-lg">
                                I agree this
                            </span>
                        </label>
                    </div>

                </div>
                <button className="bg-pink-400 block w-full rounded py-4 text-white font-bold shadow">Submit</button>

            </form>
        </div>
    );
};

export default FormSubmit;




