import React from 'react';

function HomePage() {
    return (
        <>
        <article>
            <h2>Home Page</h2>
                <p>Here is my portfolio for the course, CS 290: Web Development at Oregon State University. Please click on the tabs above to view 
                    the Travel Destinations database where CRUD (Create, Read, Update, Delete) operations can be performed. The "Topics" tab consists of the summaries of the different concepts learned in this class.</p>
                <p>With a few more classes to go, I plan to graduate next year with a Bachelor's Degree in Computer Science. I hope to use the knowledge and skills I learned from this program to 
                    hopefully obtain an internship which will lead to getting a full-time offer working as a software developer. 
                </p>
                <p>
                    This is a full-stack MERN application that uses the following technologies: MongoDB, Express, React, and Node.
                    <ul>
                        <li><strong>MongoDB</strong> is a database management system that internally stores documents in a format called BSON which is a binary form of JSON. The system allows for efficient CRUD
                        operations on large volumes of data and can also be used by numerous users. It does not support SQL as it is a database with clusters, collections, fields/form controls, and uses BSON/JSON
                        while SQL uses tables, columns, and rows. Mongoose is a JavaScript library that makes it easier for the application to interact with MongoDB. It serves as the layer between the data in the database 
                        and the objects in the Node app.</li>
                        <li><strong>Express</strong> is a popular framework used by Node and helps to get, post, and delete data as well as define the ports and routes the data will take. It provides Application Programming Interface (APIs) of various 
                        tasks that a web application will need to accomplish. It can also take static files from a public folder and create templates that build responses to incorporate the data. Middleware can handle requests within the route that the data takes.</li>
                        <li><strong>React</strong> is a high-level framework for writing frontend applications. It is written in JavaScript, with additional syntax added by React. The foundation is based around the concept of
                        components which are reusable units of UI. Using the components from the application, it creates a component tree and maps it to the real Document Object Model (DOM) tree that a browser provides. Rather than 
                        directly modifying the DOM tree, the component from the React application can be modified instead to minimize the amount of rendering the browser has to do.</li>
                        <li><strong>Node</strong> is used to develop and run server-side web applications in JavaScript. It provides a library of different JavaScript modules, which simplifies the development of web applications. 
                        It comes with many packages, for example, the Node Package Manager (npm). This is an online repository for publishing Node packages. It is also a command-line utility that can install packages from the online repository and manage the 
                        dependencies for projects.</li>
                    </ul>
                </p>
        </article>
        </>
        );
    }
    
    export default HomePage;