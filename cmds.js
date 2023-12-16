require("script.js")

var commands = {
    _hello: function(){
        response = document.getElementById('m-response')

        setInterval(function(){
            message = "Hello user, welcome to ReaperCMD. This is a CLI made by The Green Reaper."

            if(nu < message.length){
                nu++
                response.innerHTML += message.charAt(nu)
            }
        } , 20)

    },

    _webhook: function(){
        response = document.getElementById('m-response')

        setInterval(function(){
            message = "Webhook sent to:  \n " + document.getElementById('prompt').value.slice(8,121) + " \nSuccesfully at: " + moment().format("LTS")

            if(nu < message.length){
                nu++
                response.innerHTML += message.charAt(nu)
            }
        } , 20)

        fetch(document.getElementById('prompt').value.slice(7,this.length) , {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                content: "Webhook sent using ReaperCMD\nat exactly:" + moment().format("LTS") ,
                username: "ReaperCMD"
            })
        })
    },


    _catfact: function(){
        fetch("https://catfact.ninja/fact" , {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
       .then(function(response){
            return response.json()
        })
       .then(function(data){
            response = document.getElementById('m-response')

            response.innerHTML = ""

            var loopit = setInterval(function(){

            message = data.fact

            if(nu < message.length){
                nu++
                response.innerHTML += message.charAt(nu)

            }
        } , 20)
        })
    },


    _clear: function(){
        response = document.getElementById('m-response')

        response.innerHTML = "Clearing..."
        setTimeout(function(){  
            response.innerHTML = ""
        } , 3000)
    },

    _html_struct: function(){
        response = document.getElementById('m-response')

        response.innerHTML = ""

        response.innerHTML = "Copied to clipboard..."
        var html_temp_struc = `
        <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Template</title>
    <link rel="stylesheet" href="style.css">
    <script src="script.js"></script>
</head>
<body>


</body>
</html>

        `
        copy(html_temp_struc)


     
    },

    _color: function(){
        response = document.getElementById('m-response')

        setInterval(function(){
            message = "Changed Color!!" + document.getElementById('prompt').value.slice(7,this.length)

            if(nu < message.length){
                nu++
                response.innerHTML += message.charAt(nu)
            }
        } , 20) 
    
        document.getElementById('m-response').style.color = document.getElementById('prompt').value.slice(5,this.length)
        
    },

    _lib_jquery: function(){
        response = document.getElementById('m-response')

        setInterval(function(){
            message = "<h1>JQuery</h1>"

            if(nu < message.length){
                nu++
                response.innerHTML += message.charAt(nu)
            }
        } , 20) 
    }


}

