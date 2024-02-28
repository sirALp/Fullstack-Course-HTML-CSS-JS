(function(global) {

    var ajaxUtils = {};


    // returns HTTP request object
    function getRequestObject() {
        if (global.XMLHttpRequest){
            return (new XMLHttpRequest())
        }
        else {
            global.alert("Ajax is not supported!");
            return (null);
        }
    }

    // makes an ajax request
    ajaxUtils.sendGetRequest = 
        function(requestURL, responseHandler, isJsonResponse) {
            var request = getRequestObject();
            request.onreadystatechange = 
                function() {
                    handleResponse(request, responseHandler,isJsonResponse);
                };
            request.open("GET",requestURL,true);
            request.send(null); // only for POST requests
        }; 

    function handleResponse(request , responseHandler,isJsonResponse){
        if ((request.readyState == 4) && 
            (request.status == 200)) {

                //default to isJsonResponse = true
                if (isJsonResponse == undefined){
                    isJsonResponse = true;
                }                
                if (isJsonResponse) {
                    responseHandler(JSON.parse(request.responseText));
                }
                else {
                    responseHandler(request.responseText);
                }
            }
        
    }

    // exposing utils
    global.$ajaxUtils = ajaxUtils;

})(window);