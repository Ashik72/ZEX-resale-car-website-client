import React from "react";
// import useTitle from "../../hook/useTitle";

export default function Blog() {
  //   useTitle("Blogs");
  return (
    <div className="p-16 ">
      <h1 className="text-5xl text-center mb-10">Blog</h1>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className=" text-xl font-medium">
          1. What are the different ways to manage a state in a React
          application?
        </div>
        <div className="">
          <p>
            In React apps, there are at least seven ways to handle the state.
            Let us briefly explore a few of them in this part.
            <ul className="list-disc ml-5">
              <li>URL</li>
              <li>Web Storage</li>
              <li>Local State</li>
              <li>Lifted State</li>
              <li>Derived State</li>
            </ul>
          </p>
        </div>
      </div>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className="text-xl font-medium">
          2. How does prototypical inheritance work?
        </div>
        <div className="">
          <p>
            Simply put, prototypical inheritance refers to the ability to access
            object properties from another object. We use a JavaScript prototype
            to add new properties and methods to an existing object constructor.
            We can then essentially tell our JS code to inherit properties from
            a prototype. Prototypical inheritance allows us to reuse the
            properties or methods from one JavaScript object to another through
            a reference pointer function.
          </p>
        </div>
      </div>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className="text-xl font-medium">
          3. What is a unit test? Why should we write unit tests?
        </div>
        <div className="">
          <p>
            A unit test is a way of testing a unit - the smallest piece of code
            that can be logically isolated in a system. In most programming
            languages, that is a function, a subroutine, a method or property.
            The isolated part of the definition is important.
            <br />
            Unit tests, a type of functional test, have reached majority
            adoption; they are simply how many development teams do business.
            Yet, the companies I advise tend to use unit tests sporadically, and
            with low coverage. While the development environment supports unit
            tests and most of the programmers know the basic frameworks and
            tools, they only use unit tests for easy and low-value instances.
          </p>
        </div>
      </div>
      <div className="mb-5 p-10 text-start border border-base-400 bg-base-200 rounded-box">
        <div className="text-xl font-medium">4. React vs. Angular vs. Vue?</div>
        <div className="">
          <p>
            Facebook released React.js in March 2013 as a JavaScript library.
            Because React just provides one view, it is not appropriate for
            building an MVC architecture: you must solve the model and
            controller yourself. Besides this, there are only advantages and
            lots of advantages. One of the biggest of them is that React.js uses
            a virtual DOM that only compares the previous HTML code differences
            and only loads the different parts. This significantly impacts the
            loading times. In a positive way, of course.
            <br />
            ngularJS was developed in 2009 by Google. The first version was
            Angular.JS. Angular is currently known as a JavaScript framework.
            Obviously, all significant Google projects have been developed with
            Angular. Angular.js is an MVC framework. A major disadvantage of
            Angular is that it uses a regular DOM, and thus, the entire tree
            structure of the HTML tags is updated, which massively impacts the
            loading time. Angular.js has its Ionic framework for mobile
            applications.
            <br />
            Vue.js is a JavaScript-based progressive framework for creating
            single-page applications. It was created with scalability and
            incrementality in mind, as well as ease of integration with other
            view layer frameworks. Vue is built from the bottom up to be
            progressively adaptable, unlike other monolithic frameworks. The
            core library focuses solely on the view layer, and it’s simple to
            use and connect with other libraries or applications. This
            framework’s fast learning angle is almost a trademark. It’s a
            flexible framework that may be used as a library or a full-fledged
            framework for developing large web applications.
          </p>
        </div>
      </div>
    </div>
  );
}
