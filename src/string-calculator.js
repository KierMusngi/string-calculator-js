class StringCalculator{
    constructor(){
    }

    Add(input){
        try{
            if (input === ""){
                return 0;
            }
    
            let delimiters = [',', '\n']
            if(input.substring(0, 2) === "//"){
                delimiters.push(input.substring(2,3));
                input = input.split('\n')[1];
            }
    
            let stringNumbers = input.split(new RegExp(delimiters.join('|', 'g')));
    
            let total = 0;
            stringNumbers.forEach(stringNumber => {
                let integer = parseInt(stringNumber);
                if(integer < 0){
                    throw new Error('Negative integer is not allowed');
                }
                total += integer;
            });
            
            return total;
        }
        catch(err){
            throw err.message;
        }
    }
};

module.exports = StringCalculator;