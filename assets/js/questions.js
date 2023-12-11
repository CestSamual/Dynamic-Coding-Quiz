var question = document.querySelector("#question-title")


var questionArr = [
    {
        questionString: "What is addEventListener()?",
        choices:{
            correct: "A method that sets up a function to be called when an event occurs. ",
            incorrect: ["A method that adds vocal command funcionality. ", "A method to extrapolate dates for events. ", "A method used for logging users key inputs."]
        }
    }, {
        questionString: "What are data attributes used for?",
        choices:{
            correct: "To embed custom data on HTML attributes ",
            incorrect: ["To specify differetn data types from one another. ", "Allow user data inputs from interacting with HTML elements", "To store temporary data to local memory. "]
        } 
    }, {
        questionString: "What does the '===' comparision operator do?",
        choices:{
            correct: "It tests for equality of value and type. ",
            incorrect: ["It tests for equality of type only. ", "It tests for equality of value only. ", "It sets variables equal to one another. "]
        }
    }, {
        questionString: "Which of the below is not a part of css box model?",
        choices:{
            correct: "Paragraph",
            incorrect: ["Margin", "Border", "Padding"]
        }
    }, {
        questionString: "Which of the below is not a data type?",
        choices:{
            correct: "Alert ",
            incorrect: ["String", "Boolean ", "Number"]
        }
    }
]