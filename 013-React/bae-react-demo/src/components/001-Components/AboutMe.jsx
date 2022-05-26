const AboutMe = () => {
    const name = "Jordan";
    let faveColour = "Orange";
    const favePizza = "Pepperoni"
    const currentDate = new Date();


    if (favePizza === "Pepperoni") {
        faveColour = "Purple";
    }

    return(
        <>
            <h2> Hello Everyone</h2>
            {/* When putting JS into your HTML, use {} to break out of HTML */}
            <h2> My name is {name}</h2>
            <h2> Number: {32+4}</h2>
            <h2> Date: {currentDate.toLocaleDateString()}</h2>
            <h2> Colour: {faveColour}</h2>
        </>
    )
}

export default AboutMe;