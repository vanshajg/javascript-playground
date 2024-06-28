const person = {
    first_name: "John",
    last_name: "Doe",
    contact_info: {
        email_address: "john@example.com",
        phone_number: "123-456-7890",
    },
};

const toCamelCase = {
    // example: 'hello_world' => 'helloWorld'
    fromSnakeCase: (str: string): string => {
        const words = str.split('_')
        const newWords = [words[0], ...words.slice(1).map(word => word[0].toUpperCase() + word.slice(1))]
        return newWords.join('')
    },
    // example: 'hello-world' => 'helloWorld'
    fromKebabCase: (str: string): string => {
        const words = str.split('-')
        const newWords = words.map(word => {
            return word[0].toUpperCase() + word.slice(1)
        })
        return newWords.join('')
    },
    // example: 'HelloWorld' => 'helloWorld'
    fromPascalCase: (str: string): string => {
        const words = str.split('')
        const newWords = words.map(word => {
            return word[0].toUpperCase() + word.slice(1)
        })
        return newWords.join('')
    }
}

const getNewKey = (key: string): string => {
    if (key[0].match(/[A-Z]/g)) {
        return toCamelCase.fromPascalCase(key)
    }
    if (key.match(/_/g)) {
        return toCamelCase.fromSnakeCase(key)
    }
    if (key.match(/-/g)) {
        return toCamelCase.fromKebabCase(key)
    }
    return key
}



const normalise = (obj): any => {
    const newObj = {}
    for (const key in obj) {
        const new_key = getNewKey(key)
        if (typeof obj[key] === 'object') {
            const temp = normalise(obj[key])
            newObj[new_key] = temp

        } else {
            newObj[new_key] = obj[key]
        }
    }
    return newObj
}

console.log(normalise(person))  

module.exports = {
    normalise,
    toCamelCase,
    getNewKey
}