import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        loader: () => fetch('https://jobtask-server-eta.vercel.app/sectors'),
    }
])
export default router;