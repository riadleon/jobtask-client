import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import FormEdit from "../pages/FormEdit/FormEdit";
import Home from "../pages/Home/Home";


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
                path: '/edit',
                element: <FormEdit></FormEdit>,
            },
        ]
    }
])
export default router;