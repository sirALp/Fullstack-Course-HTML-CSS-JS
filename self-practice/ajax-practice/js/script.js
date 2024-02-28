document.addEventListener("DOMContentLoaded",
    function (event) {
        document.querySelector("button").addEventListener("click",
            function () {
                //Call server to get name
                $ajaxUtils
                    .sendGetRequest("data/name.json", 
                        function(res){
                            var text = 
                            res.firstName + " " 
                            + res.lastName + " " 
                            + res.age + " ";
                            if (res.isYoung) {
                                text += "& still young!";
                            }
                            else {
                                text += "& feels old!";
                            }

                            document
                                .querySelector("#content")
                                .innerHTML = "<h2>" + text + "</h2>";
                        }); 
                
                
            }
        );
    }
);