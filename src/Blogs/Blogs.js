import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='container'>
            <h1 className='text-center'>Frequently Asked Questions and Answers</h1>

            <div className='mt-4'>
                <h4>What are the differences between authorization and authentication?</h4>
                <p><strong> Answer:</strong><figure className="wp-block-table is-style-regular table-bordered table "><table><tbody><tr><td><strong>Authentication</strong></td><td><strong>Authorization</strong></td></tr><tr><td>Authentication verifies who the user is.</td><td>Authorization determines what resources a user can access.</td></tr><tr><td>Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.</td><td>Authorization works through settings that are implemented and maintained by the organization.</td></tr><tr><td>Authentication is the first step of a good identity and access management process.</td><td>Authorization always takes place after authentication.</td></tr><tr><td>Authentication is visible to and partially changeable by the user.</td><td>Authorization isn’t visible to or changeable by the user.</td></tr><tr><td>Example: By verifying their identity, employees can gain access to an HR application that includes their personal pay information, vacation time, and 401K data.</td><td>Example: Once their level of access is authorized, employees and HR managers can access different levels of data based on the permissions set by the organization.</td></tr></tbody></table></figure>

                </p>
            </div>

            <div className='mt-4'>
                <h4>Why are you using firebase? What other options do you have to implement authentication?</h4>
                <p>
                    <strong>Answer: <br /></strong> Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.That is why i use firebase.  
                </p>
                <p>
                Other alternative options are STYTCH, Ory, Supabase, Okta, Azure etc.</p>
            </div>

            <div className='mt-4 mb-5'>
                <h4>What other services does firebase provide other than authentication?</h4>
                <p> <strong>Answer: <br /> </strong>
                Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google Analytics, Predictions, Cloud Messaging etc.
                </p>
            </div>

        </div>
    );
};

export default Blogs;