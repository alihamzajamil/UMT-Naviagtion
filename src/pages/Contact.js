import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const notifySuccess = () => {
        toast.success("Your message has been sent successfully!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = { name, email, message };
        axios.post('https://sheet.best/api/sheets/e4151089-e332-43b4-b404-239676eeee2a', data)
            .then(response => {
                console.log(response);
                setName('');
                setEmail('');
                setMessage('');
                notifySuccess();
            })
            .catch(error => {
                console.error("There was an error sending your message:", error);
            });
    };

    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-16 py-16 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-3/6  md:w-1/2 md:pr-16 lg:pr-0 pr-0">
                        <h1 className="title-font font-semibold text-5xl text-gray-800">Get in Touch with UMT Navigator</h1>
                        <p className="leading-relaxed mt-4 text-gray-600">We are here to assist you with any questions or feedback about UMT Navigator. Fill out the form below and we’ll get back to you as soon as possible.</p>
                    </div>
                    <div className="lg:w-2/6 md:w-1/2 bg-gray-800 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
                        <h2 className="text-gray-100 text-lg font-medium title-font mb-5">Contact Us</h2>
                        <div className="relative mb-4">
                            <label htmlFor="full-name" className="leading-7 text-sm text-gray-100">Full Name</label>
                            <input onChange={(e) => setName(e.target.value)} value={name} type="text" id="full-name" name="full-name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="email" className="leading-7 text-sm text-gray-100">Email</label>
                            <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label htmlFor="message" className="leading-7 text-sm text-gray-100">Message</label>
                            <textarea onChange={(e) => setMessage(e.target.value)} value={message} id="message" name="message" rows="4" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button onClick={handleSubmit} className=" bg-gray-200 border-0 py-2 px-8 focus:outline-none hover:bg-gray-400 rounded text-lg">Send</button>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    );
};

export default Contact;
