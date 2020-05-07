const fs = require('fs');
const path = require('path');
const state = require('./state.js');

const {posts} = state;
const data = JSON.stringify({posts}, ``);
const filepath = path.join(__dirname, "db.json");

fs.writeFile(filepath, data, function(err){
    err? console.log(err): console.log("db created successfully");
})