import React from 'react';

const Blog = () => {
    return (
        <div className="my-20 md:w-3/4 mx-auto">
            <div className="collapse border border-collapse my-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  md:text-2xl font-semibold">
                    1.What are the different ways to manage a state in a React application?
                </div>
                <div className="collapse-content ">
                    <p className="md:text-xl  py-3">The Four Kinds of React State to Manage</p>
                    <p className="text-justify md:text-xl">
                        Local state. <br />
                        Global state. <br />
                        Server state. <br />
                        URL state.
                    </p>

                </div>
            </div>
            <div className="collapse border border-collapse mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  md:text-2xl font-semibold">
                    2.How does prototypical inheritance work?
                </div>
                <div className="collapse-content ">
                    <p className="text-justify md:text-xl py-3">
                        The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object
                        can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of
                        an object, we use Object. getPrototypeOf and Object.
                    </p>
                </div>
            </div>

            <div className="collapse border border-collapse mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  md:text-2xl font-semibold">
                    3. What is a unit test? Why should we write unit tests?
                </div>
                <div className="collapse-content ">
                    <p className="text-justify md:text-xl py-3">
                        The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing
                        is an important step in the development process, because
                        if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.
                    </p>
                </div>
            </div>

            <div className="collapse border border-collapse mb-5">
                <input type="checkbox" className="peer" />
                <div className="collapse-title  md:text-2xl font-semibold">
                    4. React vs. Angular vs. Vue?
                </div>
                <div className="collapse-content ">
                    <p className="text-justify py-3">
                        <strong>Angular</strong> , developed by Google, was first released in 2010, making it the oldest of the lot. It is a
                        TypeScript-based JavaScript framework.
                        A substantial shift occurred in 2016 on the release of Angular 2 (and the dropping of the “JS” from the original name
                        – AngularJS). Angular 2+ is known as just Angular. Although AngularJS (version 1) still gets updates, we will focus the discussion on Angular.
                    </p>
                    <p className="text-justify py-3">
                        <strong>React</strong> , developed by Facebook, was initially released in 2013. Facebook uses React extensively in their products
                        (Facebook, Instagram, and WhatsApp). Similar to Vue, the React developers
                        also announce their newest version on the blog section of the React website.
                    </p>
                    <p className="text-justify py-3">
                        <strong>Vue</strong> , also known as Vue.js, is the youngest member of the group. It was developed by ex-Google employee Evan You in 2014.
                        Over the last several years, Vue has seen a substantial shift in popularity, even though it doesn’t have the backing of a large company. The most current version is always announced on the official Vue website on their releases page. Contributors for Vue are supported by Patreon. It should be noted that Vue also has its own GitHub repo, and functions using TypeScript.

                        Further reading: Vue.js Tutorial for Beginner Developers
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blog;