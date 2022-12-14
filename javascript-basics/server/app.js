const http = require('http');

const server = http.createServer(function(req, resp) {
    resp.writeHead(200, {
        'Content-Type': 'text/html'
    });

    resp.end('<h1>Hello World</h1>');
})

server.listen(8080, function(){
    console.log("server starts...")
})

// 간단한 서버구현 할 때만 js에서 해도 나쁘진 않음
// 복잡한 서버구현은 객체지향 정석인 java에서 백엔드 구현을 하는게 좋음