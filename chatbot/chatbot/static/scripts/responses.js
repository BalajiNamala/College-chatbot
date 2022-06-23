function getBotResponse(input) {
    //rock paper scissors
    if (input == "departments") {
        return "Computer Science and Enginering \n Information Technology \n Electrical Engineering \n Civil Engineering";
    } else if (input == "paper") {
        return "scissors";
    } else if (input == "scissors") {
        return "rock";
    }

    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}
