document.getElementById('submit').addEventListener('click', () => {
      const name = document.getElementById('username').value.trim(); // Get the input value and trim extra spaces
      document.getElementById('getname').textContent = `Hello, ${name}`;
      document.getElementById('username').value = ''; //clear the input field
    })

document.querySelector('#submit').addEventListener('click',()=>{
    const update = function(){
        let dob = document.querySelector('#dob').value,
        day = new Date(dob),
        time = day.getTime(),
        today = new Date(),
        timenow = today.getTime(),
        value = timenow - time,
        days = Math.floor(value/(1000*60*60*24)),
        month = Math.floor(value/(1000*60*60*24*30.4375)),
        year = Math.floor(value/(1000*60*60*24*365.25));

        let insert = function(x,y){
            document.querySelector(x).innerHTML = y;
        }
        


        insert('#year', `you are ${year} years, ${month} months and ${days} days old.`);
        
    }
    setInterval(update,1000)
    
    document.getElementById('thanks').textContent = 'Thank You!';

})