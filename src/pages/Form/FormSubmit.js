import React, { useState } from 'react';
import { Select } from '@mobiscroll/react'; /* or import any other component */
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
// import Select from "react-select";
import './FormSubmit.css'


const FormSubmit = () => {
    // // React state to manage selected options
    // const [selectedOptions, setSelectedOptions] = useState();

    // Array of all options
    const myData = [
        {
            "group": "Manufacturing",
            "text": "Construction materials",
            "value": "construction materials"
        },
        {
            "group": "Manufacturing",
            "text": "Electronics and Optics",
            "value": "Electronics and Optics"
        },
        {
            "group": "Food and Beverage",
            "text": "Bakery & confectionery products",
            "value": "Bakery & confectionery products"
        },
        {
            "group": "Food and Beverage",
            "text": "Beverages",
            "value": "Beverages"
        },
        {
            "group": "Food and Beverage",
            "text": "Meat & meat products",
            "value": "Meat & meat products"
        },
        {
            "group": "Food and Beverage",
            "text": "Fish & fish products",
            "value": "Fish & fish products"
        },
        {
            "group": "Food and Beverage",
            "text": "Milk & dairy products",
            "value": "Milk & dairy products"
        },
        {
            "group": "Food and Beverage",
            "text": " Other",
            "value": " Other"
        },
        {
            "group": "Food and Beverage",
            "text": "Sweets & snack food",
            "value": "Sweets & snack food"
        },
        {
            "group": "Furniture",
            "text": "Bathroom/sauna",
            "value": "Bathroom/sauna"
        },
        {
            "group": "Furniture",
            "text": "Bedroom",
            "value": "Bedroom"
        },
        {
            "group": "Furniture",
            "text": "Children's room",
            "value": "Children's room"
        },
        {
            "group": "Furniture",
            "text": "Kitchen",
            "value": "Kitchen"
        },
        {
            "group": "Furniture",
            "text": "Living room",
            "value": "Living room"
        },
        {
            "group": "Furniture",
            "text": "Other (Furniture)",
            "value": "Other (Furniture)"
        },
        {
            "group": "Furniture",
            "text": "Outdoor",
            "value": "Outdoor"
        },
        {
            "group": "Furniture",
            "text": "Project furniture",
            "value": "Project furniture"
        },
        {
            "group": "Machinery",
            "text": "Machinery components",
            "value": "Machinery components"
        },
        {
            "group": "Machinery",
            "text": "Machinery equipment/tools",
            "value": "Machinery equipment/tools"
        },
        {
            "group": "Machinery",
            "text": "Manufacture of machinery",
            "value": "Manufacture of machinery"
        },
        {
            "group": "Machinery",
            "text": "Maritime",
            "value": "Maritime"
        },
        {
            "group": "Machinery",
            "text": "Aluminium and steel workboats",
            "value": "Aluminium and steel workboats"
        },
        {
            "group": "Machinery",
            "text": "Ship repair and conversion",
            "value": "Ship repair and conversion"
        },
        {
            "group": "Machinery",
            "text": "Metal structures",
            "value": "Metal structures"
        },
        {
            "group": "Machinery",
            "text": "Other",
            "value": "other"
        },
        {
            "group": "Machinery",
            "text": "Repair and maintenance service",
            "value": "Project Machinery"
        },
        {
            "group": " Metalworking",
            "text": "Construction of metal structures",
            "value": "Construction of metal structures"
        },
        {
            "group": " Metalworking",
            "text": "Houses and buildings",
            "value": "Houses and buildings"
        },
        {
            "group": " Metalworking",
            "text": "Metal products",
            "value": "Metal products"
        },
        {
            "group": " Metalworking",
            "text": "Metal works",
            "value": "Metal works"
        },
        {
            "group": " Metalworking",
            "text": " CNC-machining",
            "value": " CNC-machining"
        },
        {
            "group": " Metalworking",
            "text": "Forgings, Fasteners",
            "value": "Forgings, Fasteners"
        },
        {
            "group": " Metalworking",
            "text": "Gas, Plasma, Laser cutting",
            "value": "Gas, Plasma, Laser cutting"
        },
        {
            "group": " Metalworking",
            "text": "MIG, TIG, Aluminum welding",
            "value": "MIG, TIG, Aluminum welding"
        },
        {
            "group": "  Plastic and Rubber",
            "text": "Packaging",
            "value": "Packaging"
        },
        {
            "group": "  Plastic and Rubber",
            "text": "Plastic goods",
            "value": "Plastic goods"
        },
        {
            "group": "  Plastic and Rubber",
            "text": "Plastic processing technology",
            "value": "Plastic processing technology"
        },
        {
            "group": "  Plastic and Rubber",
            "text": "Blowing",
            "value": "Blowing"
        },
        {
            "group": "  Plastic and Rubber",
            "text": "Moulding",
            "value": "Moulding"
        },
        {
            "group": "  Plastic and Rubber",
            "text": "Plastics welding and processing",
            "value": "Plastics welding and processing"
        },
        {
            "group": "  Plastic and Rubber",
            "text": " Plastic profiles",
            "value": " Plastic profiles"
        },
        {
            "group": "  Printing ",
            "text": " Advertising",
            "value": " Advertising"
        },
        {
            "group": "  Printing ",
            "text": " Book/Periodicals printing",
            "value": " Book/Periodicals printing"
        },
        {
            "group": "  Printing ",
            "text": " Labelling and packaging printing",
            "value": " Labelling and packaging printing"
        },
        {
            "group": "   Textile and Clothing ",
            "text": " Clothing",
            "value": " Clothing"
        },
        {
            "group": "   Textile and Clothing ",
            "text": " Textile",
            "value": " Textile"
        },
        {
            "group": "Wood",
            "text": "  Other (Wood)",
            "value": "  Other (Wood)"
        },
        {
            "group": "Wood",
            "text": "  Wooden building materials",
            "value": "  Wooden building materials"
        },
        {
            "group": "Wood",
            "text": " Wooden houses",
            "value": " Wooden houses"
        },
        {
            "group": "Other",
            "text": " Creative industries",
            "value": " Creative industries"
        },
        {
            "group": "Other",
            "text": " Energy technology",
            "value": " Energy technology"
        },
        {
            "group": "Other",
            "text": "  Environment",
            "value": "  Environment"
        },
        {
            "group": "Service",
            "text": "  Business services",
            "value": "  Business services"
        },
        {
            "group": "Service",
            "text": "   Engineering",
            "value": "   Engineering"
        },
        {
            "group": "Service",
            "text": " Information Technology and Telecommunications",
            "value": " Information Technology and Telecommunications"
        },
        {
            "group": "Service",
            "text": "  Data processing, Web portals, E-marketing",
            "value": "  Data processing, Web portals, E-marketing"
        },
        {
            "group": "Service",
            "text": " Programming, Consultancy",
            "value": " Programming, Consultancy"
        },
        {
            "group": "Service",
            "text": " Software, Hardware",
            "value": " Software, Hardware"
        },
        {
            "group": "Service",
            "text": " Telecommunications",
            "value": " Telecommunications"
        },
        {
            "group": "Tourism",
            "text": " Translation services",
            "value": " Translation services"
        },
        {
            "group": "Tourism",
            "text": " Transport and Logistics",
            "value": " Transport and Logistics"
        },
        {
            "group": "Tourism",
            "text": "  Air",
            "value": "  Air"
        },
        {
            "group": "Tourism",
            "text": "  Rail",
            "value": "  Rail"
        },
        {
            "group": "Tourism",
            "text": "  Road",
            "value": "  Road"
        },
        {
            "group": "Tourism",
            "text": "  Water",
            "value": "  Water"
        }
    ];

    // // Function triggered on selection
    // function handleSelect(data) {
    //     setSelectedOptions(data);
    // }

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
                    <div className="flex items-center  rounded-t-lg border-purple-500 border-b mb-8 ">
                        <label for="name" className="w-20 text-right mr-8 p-4 text-purple-200">Sectors:</label>
                        <Select
                            data={myData}
                            touchUi={false}
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




