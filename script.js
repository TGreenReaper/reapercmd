
var message;
var nu = -1;
var response;
hljs.highlightAll();

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
        //jquery //
        
        message = "Downloading"
        
        var jqd = document.createElement("a");
        jqd.href = "../libs/jquery.js"
        jqd.download = "jquery.js"
        document.body.appendChild(jqd)
        jqd.click()

        response = document.getElementById('m-response')

        setInterval(function(){
           

            if(nu < message.length){
                nu++
                response.innerHTML += message.charAt(nu)
            }
        } , 20) 
    },

    _lib_moment: function(){
        //moment //
        
        message = "Downloading"
        
        var mm = document.createElement("a");
        mm.href = "../libs/moment.js"
        mm.download = "moment.js"
        document.body.appendChild(mm)
        mm.click()

        response = document.getElementById('m-response')

        setInterval(function(){
           

            if(nu < message.length){
                nu++
                response.innerHTML += message.charAt(nu)
            }
        } , 20) 
    },

    _help: function(){
        
        message = "1. hello (greets the user)\n2. webhook (Sends a message to a webhook)\n3. catfact (self explanatory)\n4. clear (self explanatory too)\n5. html structure template (gives source code of a basic html structure)"
        response = document.getElementById('m-response')
        setInterval(function(){
           

            if(nu < message.length){
                nu++
                response.innerHTML += message.charAt(nu)
            }
        } , 20) 
    }
}








function copy(str){
    navigator.clipboard.writeText(str);
}

document.addEventListener("DOMContentLoaded" , function(){

    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        document.getElementById("title").innerHTML = "ReaperCMD ( Mobile )";
      } 

    document.getElementById("prompt").addEventListener("keydown" , function(event){
        if(event.key == "Enter"){
            if(document.getElementById('prompt').value == "hello"){
                document.getElementById('prompt').value = ""

                commands._hello()
            }

            if(document.getElementById('prompt').value.includes("webhook")){
                document.getElementById('prompt').value = ""

                commands._webhook()
               
            } 



            if(document.getElementById("prompt").value == "catfact"){
                document.getElementById('prompt').value = ""


                commands._catfact()

            }

            if(document.getElementById("prompt").value == "clear"){
                document.getElementById('prompt').value = ""

                commands._clear()
            }

            if(document.getElementById("prompt").value.includes("html structure template")){
                document.getElementById('prompt').value = ""

                commands._html_struct()
            } 

            if(document.getElementById("prompt").value.includes("color")){
                
                commands._color()
            }

            if(document.getElementById("prompt").value == "lib jquery"){
                commands._lib_jquery()
            }

            if(document.getElementById("prompt").value == "lib moment"){
                commands._lib_moment()
            } 
            if(document.getElementById("prompt").value == "help"){
                commands._help()
            }


        }
    })    
})


