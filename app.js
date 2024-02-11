const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to Home Page');
    } else if (req.url === '/about') {
        res.end('Here is our About Section');
    } else {
        res.write('<h1>Welcome Vivek</h1>');
        res.end(
            `<h1>Oops !</h1>
            <p>Page you are looking is currently Not exist</p>
            <a href='/'>Back to Home</a>`
        );
    }
});
server.listen(5000);
