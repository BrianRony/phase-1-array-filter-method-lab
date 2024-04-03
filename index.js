function findMatching(array,matched){
   return array.filter(
    (driver) => driver.toUpperCase() === matched.toUpperCase());
}

function fuzzyMatch(array,matched){
    return array.filter(
        (pMatch) => pMatch.toUpperCase().indexOf(matched.toUpperCase())===0
    );
}
function matchName(array,matched){
    return array.filter(
        (driver) => driver.name === matched
    );
}