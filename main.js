
//event listener
document.getElementById('convertBtn').addEventListener('click', solution)


function solution () {
    //input - get #s
        let F = Number(document.getElementById('Finput').value);

     //process - Use formula
        let Coutput = Math.round((F-32)* 5/9);
        


     //Output - dispaly
        document.getElementById('output').innerHTML = Coutput ;

}
