import React from 'react';

const Blogs = () => {
    return (
        <div className='w-50 mx-auto mt-5 mb-5'>
            <div>
                <div>
                    <h4># Difference between javascript and nodejs ? </h4>
                    <p>
                        JavaScript is a simple programming language that
                        runs in any browser JavaScript Engine. Whereas Node
                        JS is an interpreter or running environment for a 
                        JavaScript programming language that holds many excesses,
                        it requires libraries that can easily be accessed from
                        JavaScript programming for better use.
                    </p>
                </div>
                <div>
                    <h4># When should you use nodejs and when should you use mongodb ?</h4>
                    <p>
                    There are many web servers built with nodejs that will then use
                     MongoDB for storing data. MongoDB offers an API library that 
                     runs within a Nodejs application to give you programmatic access
                      to MongoDB so you can create databases and then add, query,
                       update or delete data from the MongoDB database.
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <h4># Differences between sql and nosql databases.</h4>
                    <p>
                        SQL databases are vertically scalable, 
                        while NoSQL databases are horizontally scalable. 
                        SQL databases are table-based, while NoSQL databases are document, 
                        key-value, graph, or wide-column stores. 
                        SQL databases are better for multi-row transactions, 
                        while NoSQL is better for unstructured data like documents or JSON.
                    </p>
                </div>
                <div>
                    <h4># What is the purpose of jwt and how does it work ?</h4>
                    <p>
                        JWT, or JSON Web Token, 
                        is an open standard used to share security 
                        information between two parties — a client and a server. 
                        Each JWT contains encoded JSON objects, including a set of claims. 
                        JWTs are signed using a cryptographic algorithm to ensure that
                        the claims cannot be altered after the token is issued.
                    </p>
                    <p>
                        iffer from other web tokens in that they contain a set of claims. 
                        Claims are used to transmit information between two parties. 
                        What these claims are depends on the use case at hand. 
                        For example, a claim may assert who issued the token, 
                        how long it is valid for, or what permissions the client has been 
                        granted. A JWT is a string made up of three parts, 
                        separated by dots (.), and serialized using base64. 
                        In the most common serialization format, compact serialization, 
                        the JWT looks something like this: xxxxx.yyyyy.zzzzz.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Blogs;