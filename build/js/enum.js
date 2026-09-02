var Grade;
(function (Grade) {
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["Q"] = 2] = "Q";
    Grade[Grade["A"] = 3] = "A";
    Grade[Grade["W"] = 4] = "W";
    Grade[Grade["S"] = 5] = "S";
})(Grade || (Grade = {}));
const myGrade = Grade.Q;
console.log(Grade);
console.log(myGrade);
export {};
