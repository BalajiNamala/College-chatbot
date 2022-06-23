function getBotResponse(input) {
    //rock paper scissors
    if (input == "departments") {
        return "1.Computer Science and Enginering \n 2.Information Technology \n 3.Electrical Engineering \n 4.Civil Engineering";
    } else if (input == "transport") {
        return "There are no of transport ways which can be used to get to the college. Our own college transport will pick up students from across the city";
    } else if (input == "CSE") {
        return "Abc xxxxxxxxx";
    } else if (input=="IT"){
        return "Def xxxxxxxxxx";
    } else if (input=="EEE"){
        return "NFN xxxxxxxxx";
    } else if (input=="detailed departments"){
        return "Which department - CSE, IT, EEE";
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
