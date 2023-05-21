import React from 'react';
import useTitle from '../../hook/useTitle';

const Blog = () => {
    useTitle('Blog')
    return (
        <div className='max-w-[70%] mx-auto'>
            <div className="container mx-auto text-justify px-4">
                <h1 className="text-4xl font-bold mb-10 mt-24 text-info  text-center">
                    BLOG
                </h1>

                <p className="text-2xl font-bold mb-5">
                    1. What is an access token and refresh token? How do they work and
                    where should we store them on the client-side?
                </p>
                <p className="text-xl font-light mb-5">
                    Access token and refresh token are commonly used in authentication and authorization systems. An access token is a credential that grants access to certain resources or services on behalf of a user. It is typically short-lived and includes information about the user and their permissions. Refresh tokens, on the other hand, are long-lived tokens used to obtain new access tokens without requiring the user to reauthenticate. When an access token expires, the refresh token can be used to obtain a new one. To securely store these tokens on the client-side, they should be stored in a secure HTTP-only cookie or in a web storage mechanism like localStorage or sessionStorage. Storing them in these locations helps protect against cross-site scripting (XSS) attacks and prevents client-side JavaScript code from accessing the tokens directly.
                </p>
                <p className="text-2xl font-bold mb-5">
                    {" "}
                    2.Compare SQL and NoSQL databases?
                </p>
                <p className="text-xl font-light mb-5">
                   
                    <p>
                        SQL (Structured Query Language) and NoSQL (Not only SQL) databases are two different approaches to data storage and management. SQL databases, also known as relational databases, are based on a structured schema and use tables with predefined columns and relationships between them. They offer strong data consistency, ACID (Atomicity, Consistency, Isolation, Durability) properties, and are suitable for complex, structured data with fixed schemas. NoSQL databases, on the other hand, are designed to handle unstructured or semi-structured data and provide flexible schemas. They offer high scalability, horizontal scaling, and eventual consistency. NoSQL databases are often used for handling big data, real-time data, and applications requiring high availability and rapid scalability. The choice between SQL and NoSQL databases depends on the specific requirements of the application, data structure, scalability needs, and the level of data consistency desired.
                    </p>
                </p>
                <p className="text-2xl font-bold mb-5">
                    3. What is express js? What is Nest JS?
                </p>
                <p className="text-xl font-light mb-5">
                    
                    Express.js is a minimalist web application framework for Node.js that provides a simple and flexible way to build web applications and APIs. It offers a straightforward approach to handling HTTP requests and responses, routing, middleware, and other web-related functionalities. With its lightweight design and modular structure, Express.js allows developers to create scalable and efficient server-side applications with ease. <br />

                    Nest.js, on the other hand, is a progressive Node.js framework built on top of Express.js. It provides a higher-level abstraction and additional features for developing scalable and maintainable server-side applications. Nest.js follows the principles of modular architecture, dependency injection, and decorators, which are inspired by Angular. It offers a robust foundation for building enterprise-grade applications and supports various features like routing, dependency injection, middleware, and more, making it suitable for complex and scalable projects.
                </p>
                <p className="text-2xl font-bold mb-5">
                    {" "}
                    4.What is MongoDB aggregate and how does it work?
                </p>
                <p className="text-xl font-light mb-10">
                   
                    MongoDB's aggregate is a powerful method for performing advanced data aggregation operations in the MongoDB database. It allows you to process and transform data using various stages of aggregation pipelines. An aggregation pipeline consists of multiple stages, such as `$match`, `$group`, `$sort`, `$project`, and more, which are applied sequentially to process the data. Each stage performs a specific operation on the input documents and passes the transformed results to the next stage. With the aggregate framework, you can perform complex operations like filtering, grouping, sorting, joining, and calculating aggregate values on large datasets efficiently. It provides a flexible and efficient way to analyze and summarize data in MongoDB, making it suitable for generating reports, performing data analysis, and creating custom data aggregations.
                </p>
            </div>
        </div>
    );
};

export default Blog;