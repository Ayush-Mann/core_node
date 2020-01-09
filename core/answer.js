7. // Write respective headers object below.
// general headers= {
//     Request URL: https://altcampus.io/,
// Request Method: GET,
// Status Code: 200 ,
// Remote Address: 128.199.85.71:443 ,
// Referrer Policy: no-referrer-when-downgrade,
// }
// response headers = {
//     access-control-allow-credentials: true
// access-control-allow-origin: *
// access-control-expose-headers: 
// cache-control: max-age=0, private, must-revalidate
// content-encoding: gzip
// content-type: text/html; charset=utf-8
// date: Thu, 09 Jan 2020 03:00:38 GMT
// server: nginx/1.10.3 (Ubuntu)
// status: 200
// x-content-type-options: nosniff
// x-content-type-options: nosniff
// x-download-options: noopen
// x-frame-options: SAMEORIGIN
// x-frame-options: DENY
// x-permitted-cross-domain-policies: none
// x-request-id: 2nk1hdemcphuiam2s400igvh
// x-xss-protection: 1; mode=block
// }
// request headers = {:authority: altcampus.io
//     :method: GET
//     :path: /
//     :scheme: https
//     accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
//     accept-encoding: gzip, deflate, br
//     accept-language: en-US,en;q=0.9
//     cache-control: max-age=0
//     cookie: _ga=GA1.2.39193000.1568025632; track_uid=5510789f-5b05-9c92-3287-6cc88a68071b; _altcampus_key=SFMyNTY.g3QAAAABbQAAAAtfY3NyZl90b2tlbm0AAAAYN2J1QWFFUXI1NHc5YjNEMnNCS3lwQT09.nejO45mNK9wS5xD-3idaOoSpTbNRDVmqv73smKQmaw4; _gid=GA1.2.663882388.1578538721; _gat_gtag_UA_121886584_1=1
//     dnt: 1
//     sec-fetch-mode: navigate
//     sec-fetch-site: none
//     sec-fetch-user: ?1
//     upgrade-insecure-requests: 1
//     user-agent: Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36}
8. // Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4
// let url = require('url')
//   let parsedUrl = url.parse("http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4")
//   console.log(parsedUrl)
//   res.end("end")
//   let url = require('url')
//   let parsedUrl = url.parse("http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4")
//   console.log(parsedUrl)
//   res.end("end")

//   Url {
//     protocol: 'http:',
//     slashes: true,
//     auth: null,
//     host: 'localhost:3000',
//     port: '3000',
//     hostname: 'localhost',
//     hash: null,
//     search: '?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     query: 'token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     pathname: '/api/v3',
//     path: '/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4',
//     href: 'http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4'
//   }
9. // Write parsed query object
// {'token=8372fcb8y2874b2t478t6t48cbtbc72t4'}