import { useRouteError } from "react-router-dom";

const Error = () => {

    const err = useRouteError();
    console.log(err);

    return(
        <div>
            {"error"}        
        </div>
    );
}

export default Error;