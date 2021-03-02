import React, {useState} from 'react';
import data from "../data/dummy-data";

import CustomCourse from "../components/CustomCourse";

const Courses = () => {
    const [code, setcode] = useState(true);
    const [cloud, setcloud] = useState(false);

    const handleCode = () => {
        setcode(true);
        setcloud(false);
    }

    const handleCloud = () => {
        setcode(false);
        setcloud(true);
    }

    const {Coding,Cloud} = data;
    
    let dataTemp;
    if (code === true)
        dataTemp = Coding;
    else
        dataTemp = Cloud;

    return(
        <div>
            <button id="code" onClick={() => handleCode()}>Coding</button>
            <button id="code" onClick={() => handleCloud()}>Cloud</button>
            <CustomCourse data={dataTemp}/> 
        </div>
    );
};

export default Courses;