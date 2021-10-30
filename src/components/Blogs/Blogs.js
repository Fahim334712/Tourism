import React, { useEffect, useRef, useState } from 'react';
import './Blogs.css';

const Blogs = () => {
    const [users, SetUser] = useState([]);
    const nameRef = useRef();
    const textRef = useRef();

    const handleForm = e => {
        const name = nameRef.current.value;
        const text = textRef.current.value;
        const newUser = { name, text };
        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Blog Added Successfully');
                    e.target.reset();
                }
            })
        e.preventDefault();
    }
    useEffect(() => {
        fetch('http://localhost:5000/users')
            .then(res => res.json())
            .then(data => SetUser(data));
    }, [])

    //Delete An User
    const handleDelete = id => {
        const proceed = window.confirm('Alert! Sure Want to delet!')
        if (proceed) {
            const url = `http://localhost:5000/users/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted Successfully');
                        const remainingUsers = users.filter(user => user._id !== id);
                        SetUser(remainingUsers);
                    }
                })
        }
    }

    return (
        <div className="mt-5 mb-3">

            <div>
                <h2 className="text-danger mb-4 hiro">Add Your Blogs(share your experience)</h2>
                <form onSubmit={handleForm} className="mt-3">
                    <p>Name : <input type="text" placeholder="Your Name" ref={nameRef} /><br /></p>
                    <textarea rows="4" cols="50" ref={textRef} >
                        Enter Blogs here...</textarea><br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <div>
                {
                    users.map(user => <div key={user._id} className="api">
                        <h6 className="apiName">Blogger Name : {user.name}</h6>
                        <p >{user.text}</p>
                        <div className="thebhn">
                            <button>Update Data</button>
                            <button onClick={() => handleDelete(user._id)}>Delete Data</button>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Blogs;
