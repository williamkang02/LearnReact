import React, { useState } from 'react';
import Head from "next/head";
import Image from "next/image";
// import ReactSearchBox from "react-search-box";


const GithubForms = () => {
    
    // const [searchValue, setSearchValue] = useState("");
    // const [selectedRecord, setSelectedRecord] = useState(null);

    function handleClick(){
        console.log("button clicked");
        // console.log("Current search value: ", searchValue);
        // console.log("Selected record: ", selectedRecord);
    }

  return (
    <>
        <div>
            <h1>Github Search</h1>
            {/* <ReactSearchBox 
                placeholder="Search in Github"
                data={[
                    {
                        key: "austin",
                        value: "Austin Sofarer"
                    },
                    {
                        key: "dave",
                        value: "Dave Gill"
                    },
                    {
                        key: "kachun",
                        value: "Kachun Lee"
                    },
                    {
                        key: "will",
                        value: "William Kang"
                    },
                    {
                        key: "jeejun",
                        value: "Jeejun Tang"
                    },
                    {
                        key: "kyle",
                        value: "Kyle Davis"
                    }
                ]}
                onSelect={(record: any) => console.log("Selected Record: ", record)}
                onFocus={() => {
                    console.log("This function is called when its focused");
                }}
                onChange={(value: any) => console.log("Selected Value: ", value)}
                autoFocus
                leftIcon={<>🐼</>}
                iconBoxSize="48px"
            /> */}
            <form>
                <label>Username:</label> <br/>
                <input type="text" id="username" name="username"/> <br/>
                <button onClick={handleClick}>Search</button>
            </form>
            
        </div>     
    </>
  )
}

export default GithubForms;