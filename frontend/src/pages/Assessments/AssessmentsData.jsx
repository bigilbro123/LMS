import Header from "../../components/Header/Header";
import { FaPlus } from "react-icons/fa";
import { CiFilter } from "react-icons/ci";
import { useEffect, useState } from "react";
import RoundProgressBarAssessment from "../../components/RoundBar/RoundAssessment";
import { Link } from "react-router-dom";
import baseUrl from "../../api/api";

const AssessmentsData = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null); // Error handling
    const [loading, setLoading] = useState(true); // Loading indicator

    const toggleDropdown = () => setIsOpen(prev => !prev);

    // Fetch Assessments Data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${baseUrl.baseUrl}api/user/get/AllAssessment`);
                if (!response.ok) throw new Error('Failed to fetch data');

                const result = await response.json();
                setData(result.data);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Failed to load assessments'); // Set error state
            } finally {
                setLoading(false); // Stop loading indicator
            }
        };

        fetchData();
    }, []);

    return (
        <div className="w-full h-full bg-white">
            {/* Header */}
            <Header name='Assessments' />

            {/* Top Bar */}
            <div className="flex mx-10 justify-between mt-10">
                {/* Create Assessment */}
                <Link to={'/create/Assessment'}>
                    <div className="flex w-56 border-2 justify-evenly items-center py-2 ml-10 cursor-pointer">
                        <div className="text-green-500"><FaPlus /></div>
                        <h4 className="text-black">Create New Assessment</h4>
                    </div>
                </Link>

                {/* Filter Dropdown */}
                <div className="relative inline-block text-left w-36 mr-10">
                    <button
                        type="button"
                        className="flex justify-between items-center w-full border-2 py-2 px-4 bg-white text-black rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                        onClick={toggleDropdown}
                    >
                        <h4>Filter</h4>
                        <CiFilter className="text-green-500" />
                    </button>

                    {isOpen && (
                        <div
                            className="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
                            role="menu"
                            aria-orientation="vertical"
                        >
                            <div className="py-1">
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Pending</button>
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Completed</button>
                                <button className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Failed</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Assessment Cards */}
            <div className="mt-10 ml-10 flex flex-wrap gap-3">
                {loading ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div className="text-red-500">{error}</div>
                ) : (
                    data.map((item) => (
                        <><Link to={`/Assessment/Assign/${item._id}`}>
                            <div className="mt-5">
                                <RoundProgressBarAssessment
                                    initialProgress={0}
                                    Module={`Number of questins : ${item.questions.length}`}
                                    title={` ${item?.title}`}
                                    complete={" complete rate 0.00%"}

                                />
                            </div>
                        </Link></>

                    ))
                )}
            </div>
        </div>
    );
};

export default AssessmentsData;
