
import { useEffect, useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

export default function Features() {
    const [file, setFile] = useState(null);
    const [token, setToken] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        console.log(e.target.files[0])
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) {
            toast.error('Please log in to submit')
            return;
        }

        if (!file) {
            return;
        }

        const formData = new FormData();
        formData.append('resume', file);

        try {
            const response = await axios.post('https://av-yourhr-be.vercel.app/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (response.status === 201) {
                toast.success("File uploaded successfully")
            } else {
                toast.error('Failed to upload the file')
            }

        } catch (error) {
            console.error('Error uploading file:', error);
        }

    };

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [])

    return (
        <>
            <div className="h-screen w-full bg-gradient-to-b from-zinc-900 to-zinc-800 flex items-center px-20 justify-between">
                <div className="flex flex-col gap-10 text-white w-[50%]">
                    <h1 className="text-[3.5rem] font-bold text-white">
                        Look for jobs based on the skills mentioned in your resume
                    </h1>
                    <p className="w-[80%] text-xl">
                        Upload your resume to get matched with top employers. Your dream job
                        is just a few clicks away!
                    </p>
                </div>
                <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center w-[40%]">
                    <label
                        htmlFor="dropzone-file"
                        className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg
                                className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 16"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                />
                            </svg>
                            {file ?

                                (<p className="mb-2 text-sm text-center text-gray-500 dark:text-gray-400">
                                    {file.name}
                                </p>) :


                                (<div>

                                    <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                        <span className="font-semibold">Click to upload</span> or drag and
                                        drop your resume
                                    </p>
                                    <p className="text-xs text-center text-gray-500 dark:text-gray-400">PDFs only</p>
                                </div>)
                            }
                        </div>
                        <input id="dropzone-file" type="file" className="hidden" onChange={handleFileChange} />
                    </label>
                    <button type="submit" className="mt-10 p-2 border-white border-2 text-white ">
                        Submit
                    </button>
                </form>
                <Toaster />
            </div>
        </>
    );
}

