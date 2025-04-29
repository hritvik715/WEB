const words = [
    "apple",
    "banana",
    "orange",
    "banana",
    "apple",
    "orange",
    "apple",
    "grape",
];

//imp-> precedence => (+) > (||)

const wordFrequency = words.reduce((frequencyMap, word) => {
    frequencyMap[word] = (frequencyMap[word] || 0) + 1;
    return frequencyMap;
}, {})

console.log(wordFrequency);


//imp->ye precedence (kiski higher priority hai) vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
//imp->ye precedence vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
//imp->ye precedence vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
//imp->ye precedence vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
//imp->ye precedence vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
//imp->ye precedence vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
//imp->ye precedence vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
//imp->ye precedence vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
//imp->ye precedence vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
//imp->ye precedence vaala topic dekh JONAS JS kaa jo notes banaya hua hai tune
