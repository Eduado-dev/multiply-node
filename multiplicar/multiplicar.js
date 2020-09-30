
const colors = require('colors');
const fs = require('fs');

let listTable = (base, limit = 10) => {
    for (let i = 1; i <= limit; i++) {
        console.log(`${base} * ${i} = ${base * i}`.cyan);
    }
}

let newFile = (base, limit=10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} its not a number`.red);
            return;
        }

        let data = '';

        for (let i = 1; i <= limit; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }


        fs.writeFile(`tables/table-${base}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`table-${base}.txt`.yellow);

            console.log(`The file table-${base} has been created!`.yellow);
        });
    })
}

module.exports = {
    newFile,
    listTable
}