import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: "/",
        errorElement: <ErrorPage />,
        children: [
            {
                path: "",
                element: <Root />,
            },
            {
                path: "content",
                children: [
                    {
                        path: "",
                        element: <section>content root path</section>,
                    }
                ],
            },
        ],
    },
]);

export default router;