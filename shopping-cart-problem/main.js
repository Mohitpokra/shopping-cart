const fs = require("fs");

const getFinalResult = (filename) => {
    try{
        // parse the file and then apply your appropriate logic to get the desired output
        // Print product details and product price as specified in the problem statement
        // return total amount as your final answer
        // For example, if you're answer is 'Total Amount: 29261', just return 29261.
    }catch(error){
        console.error(error);
    }
}

const filename = process.argv[2];
getFinalResult(filename);

module.exports = { getFinalResult }