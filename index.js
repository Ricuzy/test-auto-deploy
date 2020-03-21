var express = require('express')

var app = express()

app.get(`/`, (req, res, next) => {
	res.send(
		`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <link rel="dns-prefetch" href="//www.ranxinxiang.cn" />
            <meta
                name="App-Config"
                content="fullscreen=yes,useHistoryState=yes,transition=yes"
            />
            <meta content="yes" name="apple-mobile-web-app-capable" />
            <meta content="yes" name="apple-touch-fullscreen" />
            <meta content="telephone=no,email=no" name="format-detection" />
            <meta http-equiv="X-UA-Compatible" content="IE=edge" />
            <meta content="black" name="apple-mobile-web-app-status-bar-style" />
            <script src="//cdn.bootcss.com/jquery/3.4.1/core.js"></script>
            <meta
                name="viewport"
                content="width=device-width,initial-scale=1,maximum-scale=1,minimum-scale=1,user-scalable=no,viewport-fit=cover"
            />
            <title>会说话的说明书</title>
    
        </head>
    
        <body style="margin: 0; padding: 0; width: 100%; height: 100vh;">
            
        
        <script>
        $.ajax({
            type: 'GET',
            url: '/api/base/project/list',
            success: function(response) {
                console.log(response)
            }
        })
        </script>
        </body>
    </html>
    `
	).end()
})

app.listen(9232, () => {
	console.log(`app is running at port: 9232`)
})
