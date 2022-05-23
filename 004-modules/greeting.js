// Create variable to export

const greeting = "Hello Chief";

// Create function to export
// Anonymous function so only called upon when ran
const printGreeting = () => {
    console.log(greeting);
}

// Export both variable and function as module objects

// module.exports.<name_of_exported_variable> = <variable>

module.exports.greetingString = greeting;

module.exports.printGreeting = printGreeting;