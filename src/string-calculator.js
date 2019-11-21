class StringCalculator{
    constructor(){
    }

    Add(input){
        if (input === ""){
            return 0;
        }

        let total = 0;
        let stringNumbers = input.split(",");

        stringNumbers.forEach(stringNumber => {
            let integer = parseInt(stringNumber);
            total += integer;
        });

        return total;
    }
};

module.exports = StringCalculator;