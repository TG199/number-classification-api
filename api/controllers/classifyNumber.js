const { checkPrime, checkArmstrong, oddEven, digitSum, checkPerfect } = require('../utils/numberUtils');
const axios = require('axios');


const classifyNumber = async (req, res) => {
    const { number } = req.query;

    if (!number || isNaN(number)) {
        return res.status(400).json({
            number: number,
            error: true,
           
        });
    }
    const num = parseInt(number, 10);
    let  funFact = "";
    try {
        const response = await axios.get(`http://numbersapi.com/${number}/math`);
        funFact = response.data;
    } catch (error) {
        return res.status(400).json({
            error: true,
            message: error.message
        });
        
    }
    let properties = [];

    if (checkArmstrong(num)) properties.push("armstrong");
    if (checkPrime(num)) properties.push("prime");
    properties.push(oddEven(num) ? "even" : "odd");
    
    res.status(200).json({
        number: num,
        is_prime: checkPrime(num),
        is_armstrong: checkArmstrong(num),
        properties: properties,
        is_perfect: checkPerfect(num),
        digit_sum: digitSum(num),
        fun_fact: funFact
    });
}
module.exports = classifyNumber;
