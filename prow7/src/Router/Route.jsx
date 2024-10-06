import {
  createBrowserRouter,
} from "react-router-dom";
import App from '../App.jsx'
import ErrorPage from "../pages/Error-page.jsx";
import UserForm from "../pages/UserForm.jsx";
import UpdateForm from "../pages/UpdateForm.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/reg",
    element: <UserForm />,

  },
  {
    path: "/update/:id",
    element: <UpdateForm />,

  },
  
]);
export default router;
