// Code your solution here
function findMatching(namesArr, string) {
    return namesArr.filter((possibleName) => possibleName.toLowerCase() === string.toLowerCase()
    );
}

function fuzzyMatch(source, testString) {
    return source.filter((possibleName) => possibleName.toLowerCase().indexOf(testString.toLowerCase()) === 0
    )
};

function matchName(source, matchingName) {
    return source.filter((record) => record.name === matchingName);
}