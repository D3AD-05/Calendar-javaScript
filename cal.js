// global 
let nav = 0;  // 
let clicked = null;              //if localstg has event parse JSON else [ ]
let event = localStorage.getItem('event') ? JSON.parse(localStorage.getItem('event')) : [];

const calendar = document.getElementById('calendar');

const weekDays = ['Sunday', 'Monday', 'Tuesday', 'Wensday', 'Thursday', 'Friday', 'Saturday'];

function loadCal() {
    const date = new Date(); // curent datenew Date(2022,2,28)
      
        if (nav !==0) {
            date.setMonth(date.getMonth()+nav)
           
            
        }
        console.log("date====>" ,date);
        

    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    //console.log(date);// ww mm dd yy time
    // console.log(day, month, year);

    //to get the no of days in the month
    const daysInMonth = new Date(year, month+1,0).getDate();
    //month => aug                              now aug 1    -current month
    //month+1 => sep                            now sep 1     -next month
    //(month + 1, 0) => 0 is last day of aug     now aug 31     -last day of prev mnth
    //taking the prvs day of the current month  [30 31 1 2 3]
    //console.log('no of days ' + daysInMonth);

    //to get the the first day of the month
    const firstDay = new Date(year, month, 1)//.getDate();
    //console.log('first day of month '+firstDay);

    //document.getElementById('dateDisplay').innerHTML=`${date.toLocaleDateString('ml',{month:'long'})} ${year}`
   

    const d = firstDay.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric'
    });
    console.log('first day '+ d);
    const emptyDays = weekDays.indexOf(d.split(', ')[0]);
    console.log('empty days'+ emptyDays);

   calendar.innerHTML=' '

    for(let i = 1; i <= emptyDays + daysInMonth; i++) {
        const daySquare = document.createElement('div');
        daySquare.classList.add('day');
    
        if (i > emptyDays) {
         daySquare.innerText = i - emptyDays;
         daySquare.addEventListener('click', () => console.log("click"));

        }
        else {
            daySquare.classList.add('padding')
        }
//console.log(i);
      
        // console.log(daySquare);
        calendar.appendChild(daySquare);  
        
    }
}

function onCalaBtn(){
     document.getElementById('nxt').addEventListener('click', () => {
        nav++
      loadCal();
        console.log('nxt',nav);
        
    }); 
     document.getElementById('prv').addEventListener('click', () => {
         nav--
         loadCal();
         
         console.log(nav);
     });
    // console.log(nav);
    
    
}


onCalaBtn()
loadCal();

