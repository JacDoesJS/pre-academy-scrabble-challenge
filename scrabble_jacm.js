
class Scrabble {
    constructor(scrabble) {
        this._scrabble = word;
    }

    score(word) {
        let wordScore = 0;

        if (word != null) {
            console.log("yes");
            let wordU = word.toUpperCase();

            for (let i = 0; i < wordU.length; i++) {
                if (wordU[i] === "A" || wordU[i] === "E" || wordU[i] === "I" || wordU[i] === "O" || wordU[i] === "U" || wordU[i] === "L" || wordU[i] === "N" || wordU[i] === "R" || wordU[i] === "S" || wordU[i] === "T") {
                    wordScore += 1;
                }
                if (wordU[i] === "D" || wordU[i] === "G") {
                    wordScore += 2
                }
                else if (wordU[i] === "B" || wordU[i] === "C" || wordU[i] === "M" || wordU[i] === "P") {
                    wordScore += 3;
                }
                else if (wordU[i] === "F" || wordU[i] === "H" || wordU[i] === "V" || wordU[i] === "W" || wordU[i] === "Y") {
                    wordScore += 4;
                }
                else if (wordU[i] === "K") {
                    wordScore += 5;
                }
                else if (wordU[i] === "J" || wordU[i] === "X") {
                    wordScore += 8;
                }
                else if (wordU[i] === "Q" || wordU[i] === "Z") {
                    wordScore += 10;
                }
                else {
                    wordScore += 0;
                }

            }
            return wordScore;

        }
        // else {
        //   wordScore = 0;
    }




}

//};

//export default Scrabble;

let scrabble = new Scrabble('a')
console.log(scrabble.score()) // => 6

let mobile = {
    brand: 'Samsung',
    model: 'Galaxy Note 9'
};

for (let key in mobile) {
    console.log(`${key}: ${mobile[key]}`);
}