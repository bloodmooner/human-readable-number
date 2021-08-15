module.exports = function toReadable (number) {
    let StringNumber = String(number);
    let units = '';
    let dozens = '';
    let hundreds = '';
    


    const uniqueNumbers = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen'
    ];
  
    const uniqueDozens = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    

    for(let i = 0; i < uniqueDozens.length + 2; i++) {

        if(StringNumber.length == 3 && StringNumber.substring(0, 1) == i) {
            hundreds = `${uniqueNumbers[StringNumber.substring(0, 1)]} hundred `;
            units = ` ${uniqueNumbers[StringNumber.substring(2, 3)]}`;
            dozens = `${uniqueDozens[StringNumber.substring(1, 2) - 2]}`;
        }

        if(StringNumber.length == 2 && StringNumber.substring(0, 1) == i && StringNumber.substring(0, 1) != 1) {
            dozens = `${uniqueDozens[i - 2]}`;
            units = ` ${uniqueNumbers[StringNumber.substring(1, 2)]}`;
        }

        if((StringNumber.length == 2 || StringNumber.length == 1) && number <= 19) {
            for(let j = 0; j < uniqueNumbers.length; j++) {
                if(number == j) units = `${uniqueNumbers[j]}`;
            }
        }    
    }
    
    return `${hundreds}${dozens}${units}`; 
};


/* const toReadable = (number) => {

    let StringNumber = String(number);
    let units = '';
    let dozens = '';
    let hundreds = '';
    


    const uniqueNumbers = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 
        'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 
        'fifteen', 'sixteen', 'seventeen', 'eightteen', 'nineteen'
    ];
  
    const uniqueDozens = [
        'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
    

    for(let i = 0; i < uniqueDozens.length + 2; i++) {

        if(StringNumber.length == 3 && StringNumber.substring(0, 1) == i) {
            hundreds = `${uniqueNumbers[StringNumber.substring(0, 1)]} hundred `;
            units = ` ${uniqueNumbers[StringNumber.substring(2, 3)]}`;
            dozens = `${uniqueDozens[StringNumber.substring(1, 2) - 2]}`;
        }

        if(StringNumber.length == 2 && StringNumber.substring(0, 1) == i && StringNumber.substring(0, 1) != 1) {
            dozens = `${uniqueDozens[i - 2]}`;
            units = ` ${uniqueNumbers[StringNumber.substring(1, 2)]}`;
        }

        if((StringNumber.length == 2 || StringNumber.length == 1) && number <= 19) {
            for(let j = 0; j < uniqueNumbers.length; j++) {
                if(number == j) units = `${uniqueNumbers[j]}`;
            }
        }    
    }
    
    return `${hundreds}${dozens}${units}`; 
}

console.log(toReadable(9)); */

