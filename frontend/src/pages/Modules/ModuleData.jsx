import { Link } from "react-router-dom";
import Header from "../../components/Header/Header"
import RoundModule from "../../components/RoundBar/RoundModule"
import { FaPlus } from "react-icons/fa";
import { useEffect, useState } from "react";
import baseUrl from "../../api/api";

const ModuleData = () => {
    const [Data, setData] = useState([]); // State to store fetched data

    useEffect(() => {
        const fetchModules = async () => {
            try {
                const response = await fetch(`${baseUrl.baseUrl}api/modules`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                });

                if (!response.ok) { // Check for HTTP errors
                    throw new Error(`Error: ${response.statusText}`);
                }

                const data = await response.json();
                setData(data); // Update state with fetched data
            } catch (error) {
                console.error("Failed to fetch modules:", error.message);
            }
        };

        fetchModules(); // Invoke the function

    }, []); 

    useEffect(() => {
        console.log(Data);
    }, [Data]);
    return (
        <div className="w-full h-full bg-white">
            <div><Header name='Module' /></div>
            <div>

                <Link to={'/createModule'}>
                    <div className="flex mx-10 justify-between mt-10 ">
                        <div className="flex w-56 border-2 justify-evenly items-center py-2 ml-10 cursor-pointer
                                    ">
                            <div className="text-green-500">
                                <FaPlus />
                            </div>
                            <h4 className="text-black">Add New Module</h4>
                        </div>

                    </div>

                </Link>

            </div>

            <div className="mt-10 ml-10 flex mr-5 flex-wrap gap-1">
                {
                    Data?.map((item) => {
                        return (
                            <RoundModule key={item._id} initialProgress='40' title={item.moduleName} Module={`no. of video ${item.videos.length}`} duration='Duration : 01 : 56 hr' complete='Completion Rate : 40%' />

                        )
                    })
                }

            </div>
        </div>
    )
}

export default ModuleData