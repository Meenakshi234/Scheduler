export function  getAppointmentsForDay(state, day) {
    //... returns an array of appointments for that day
  
    
    const appointmentList =[];
  
     
    if(typeof state.days != 'undefined' && state.days != null && state.days.length >=1) {
      
        const filteredDay = state.days.filter( day1 => day1.name === day);
        if(filteredDay != 'undefined' && filteredDay.length > 0){
            const appointmentsForDay = filteredDay[0].appointments;
            console.log("filterday array val",appointmentsForDay);
            const appKeys = Object.keys(state.appointments);
            for(var i = 0 ; i< appointmentsForDay.length; i++) {
                    for(var appt in appKeys){
                        if( appt == appointmentsForDay[i]){
                            console.log("got the match app",state.appointments[appt]);
                            appointmentList.push(state.appointments[appt]);
                        }
                    }
            }
            console.log("after for loop, appointment list length and data",appointmentList.length,appointmentList[0],appointmentList[1],appointmentList[2]);
        }
       
         
    }
  
        return appointmentList;
  
    

   
  }
  