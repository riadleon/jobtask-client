import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import FormEdit from "../pages/FormEdit/FormEdit";
import Home from "../pages/Home/Home";
import DisplayData from "../pages/StoredData/DisplayData";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,

        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('https://jobtask-server-eta.vercel.app/sectors'),
            },
            {
                path: '/display',
                element: <DisplayData></DisplayData>,
                loader: () => fetch('https://jobtask-server-riadleon.vercel.app/storing/'),
            },
            {
                path: '/display/:id',
                element: <FormEdit></FormEdit>,
                loader: ({ params }) => fetch(`https://jobtask-server-riadleon.vercel.app/storing/${params.id}`),
            },
        ]
    }
])
export default router;