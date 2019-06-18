function _calculator(){
    this.output=function(result){
        let p = document.createElement("p");
        p.innerHTML=result;
        document.querySelector("#evalOut").appendChild(p);
    }
    this.evaluate=function(str){
        //tokenise it and then evaluate it
        //for now, juust as a demo, let's 'eval' it
        result=eval(str);
        this.output(result);
    }
}


var calculator = new _calculator();
document.addEventListener("DOMContentLoaded",()=>{
    document.querySelector("input").addEventListener("keydown",(e)=>{
        if (e.key=="Enter"){
            calculator.evaluate(document.querySelector("input").value);
            document.querySelector("input").value="";
        }
    })
});
