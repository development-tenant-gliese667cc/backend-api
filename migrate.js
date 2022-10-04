const { exec } = require('child_process');
const fs = require('fs');
const connection = require('./connections/postgres')

const config = JSON.stringify({
    development: { ...connection.options },
    test: { ...connection.options },
    production: { ...connection.options }
})

fs.writeFileSync('config/config.json', config);
exec('npx sequelize-cli db:migrate', (error, stdout, stderr) => {
    if(error) {
        throw error;
    }

    console.log(stdout);
    console.error(stderr);
});
