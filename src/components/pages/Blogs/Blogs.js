import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-10 lg:m-10 h-screen'>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    What is CORS?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>Cross-origin resource sharing (CORS) is a browser security feature that restricts cross-origin HTTP requests that are initiated from scripts running in the browser. If your REST API's resources receive non-simple cross-origin HTTP requests, you need to enable CORS support.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    Why are you using firebase? What other options do you have to implement authentication?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more. There are multiple optiions
                        <li>Back4App.</li>
                        <li>Backendless</li>
                        <li>Kuzzl</li>
                    </p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    How does the private route works?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-transparent rounded-box  w-full">
                <div className="collapse-title text-xl font-bold">
                    What is Node? How does Node work?
                </div>
                <div className="collapse-content">
                    <p className='font-bold'>Node. js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node. js wastes no time or resources on waiting for I/O requests to return.</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;