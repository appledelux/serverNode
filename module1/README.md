# Module DB

# Usage 

```js

const setupDatabase = require('moduleOne-db')

setupDatabase(config).then(db => {
    const {Agent,Metric} = db
}).catch(err => console.error(err))

```

# Dependencies
npm i debug --save
npm i sequelize pg pg-hstore
npm i inquirer chalk