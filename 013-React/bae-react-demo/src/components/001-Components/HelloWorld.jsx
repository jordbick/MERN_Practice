// This component will be to add 2 <h2> to our page

// React uses node to export module, each file can export one thing
// This file will be exporting the function HelloWorld

const HelloWorld = () => {
    // A function can only ever return one thing
    // If we wrap in a div or react fragment then its okay
    return(
        <>
            <h2>Hello World!</h2>
            <h3>How are you?</h3>
            <p>NO REALLY? HOW ARE YOU?</p>
            <p>Now look at these puppies</p>
            <img src="https://www.themoderndogtrainer.net/wp-content/uploads/2015/01/puppy-class.jpg" alt="puppies" height="600" width="800"/>
            <p>Feel better?</p>
            <p>Well I do</p>
        </>
    );
};

// same as: module.exports = HelloWorld
export default HelloWorld;