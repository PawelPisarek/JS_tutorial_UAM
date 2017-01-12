const express = require('express');
const bodyParser = require('body-parser');
const routers = {
    api: require('./routers/api'),
    auth: require('./routers/auth')
}

const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.set('config', {});

// app.use(routers.auth);
app.use('/api', routers.api);
// app.use(express.static(__dirname + '/public/'));
// app.put
// app.delete
// app.create


app.listen(8080, () => console.log('Server started on port 8080'));