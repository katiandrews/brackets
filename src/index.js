module.exports = function check(str, bracketsConfig) {
    str = str.split(''); 
    while (str.length !== 0) { //search for matching pair till there is no brackets or till programm return false 
        let firstLength = str.length; //str length before searching for matching brackets
        
        for (n = 0; n < bracketsConfig.length; n++) { //check pair in string for each type of brackets
            let openBracket = bracketsConfig[n][0];
            let closeBracket = bracketsConfig[n][1];

            for (j = 0; j < str.length; j++) { //
                //check if next element is a matching bracket and remove pair from string
                if (str[j] === openBracket && str[j + 1] === closeBracket) {
                    str.splice(j, 2);
                }
            } 
        }
        let secondLength = str.length; //str length after searching for matching brackets
        if (firstLength === secondLength) { 
            //if initial length is equal to the final length, there is no matching pairs
            return false;
        }
    }
    return true;
}
