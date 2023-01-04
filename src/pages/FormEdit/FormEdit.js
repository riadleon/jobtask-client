import { Select } from '@mobiscroll/react';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';

const FormEdit = () => {
    const router = useParams();
    const [store, setStore] = useState({});
    const { id } = router;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:8000/storing/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data.success) {
                    setStore(data.data);
                } else {
                    toast.error(data.error);
                }
            })
            .catch((err) => toast.error(err.message));
    }, [id]);

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


        fetch(`http://localhost:8000/storing/${id}`, {
            method: 'PATCH',
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
                    navigate('/');

                }
                else {
                    toast.error(data.message);
                }
            })
            .catch(err => toast.error(err.message))

    }
    return (
        <div>

            <div className="bg min-h-screen flex items-center text-lg p-48" >
                <form onSubmit={handleSubmit} className="p-10 md:w-2/3 lg:w-1/2 mx-auto rounded">
                    <div className="shadow">
                        <div className="flex items-center bg-transparent rounded-t-lg border-purple-500 border-b">
                            <label for="name" className="w-20 text-right mr-8 p-4 text-purple-200">Name:</label>
                            <input required
                                type="text"
                                defaultValue={store?.clientName}
                                name="name"
                                id="name"
                                className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" />

                        </div>
                        <div className="flex items-center  rounded-t-lg border-purple-500 border-b mb-8 ">
                            <label for="sectors" className="w-20 text-right mr-8 p-4 text-purple-200">Sectors:</label>
                            <textarea
                                defaultValue={store?.sectors}
                                className="flex-1 p-4 pl-0 bg-transparent placeholder-purple-300  outline-none text-white overflow-ellipsis overflow-hidden" name="" id="" >

                            </textarea>


                        </div>


                    </div>
                    <Link to='/'>
                        <input type="submit" value='Update' className=" btn-primary block w-full rounded py-4 text-white font-bold shadow" />
                    </Link>

                </form>
            </div>
        </div>
    );
};

export default FormEdit;