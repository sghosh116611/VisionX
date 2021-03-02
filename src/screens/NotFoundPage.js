import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return(
        <div>
            <p>Error 404: Not found Page.</p>
            Go to <Link to = "/"> homepage. </Link>
        </div>
    );
};

export default NotFoundPage;