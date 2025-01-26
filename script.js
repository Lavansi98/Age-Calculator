document.getElementById('submit').addEventListener('click', () => {
      const name = document.getElementById('username').value.trim(); // Get the input value and trim extra spaces
      document.getElementById('getname').textContent = name ? `Hello, ${name} your age is :` : 'Please enter your name.';
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
        sec = Math.floor(value/1000),
        min = Math.floor(value/(1000*60)),
        hour = Math.floor(value/(1000*60*60)),
        days = Math.floor(value/(1000*60*60*24)),
        week = Math.floor(value/(1000*60*60*24*7)),
        month = Math.floor(value/(1000*60*60*24*30.4375)),
        year = Math.floor(value/(1000*60*60*24*365.25));

        let insert = function(x,y){
            document.querySelector(x).innerHTML = y;
        }
        
        insert('#year',year + ' Years');
        insert('#month',month + ' months');
        insert('#week',week + ' weeks');
        insert('#day',days + ' days');
        insert('#hour',hour + ' hours');
        insert('#min',min + ' minutes');
        insert('#sec',sec + ' seconds');
        
    }
    setInterval(update,1000)
    
    document.getElementById('thanks').textContent = 'Thank You!';

})