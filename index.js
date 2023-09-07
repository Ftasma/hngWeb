const moreInfoButton= document.querySelector('.info-button')
const showMoreInfo = document.querySelector('.show-info')
const date = document.querySelector('.date')
const time = document.querySelector('.time')
const currentDate = new Date()
const dayOfWeekNow= currentDate.getDay()

const myTime= new Date()

const offsetHours= 1;
myTime.setHours(myTime.getHours()-offsetHours)
const year = myTime.getUTCFullYear()
const timeMilliSecs= myTime.getTime()
// const month= (myTime.getUTCMonth()+1).toString().padStart(2, '0')
// const day = myTime.getUTCDate().toString().padStart(2,'0')
// const hour =( myTime.getUTCHours()+1).toString().padStart(2,'0')
// const minutes = myTime.getUTCMinutes().toString().padStart(2,'0')
// const seconds = myTime.getUTCSeconds().toString().padStart(2,'0')
// console.log(`The time is ${hour}:${minutes}:${seconds}Z`);

const dateFunc=()=>{
    switch(dayOfWeekNow){
        case 0:
            date.textContent='Today is Sunday';
            break;
            case 1:
                date.textContent='Today is Monday';
                break;
                case 2:
                    date.textContent='Today is Tuesday';
                    break;
                    case 3:
                        date.textContent='Today is Wednesday';
                        break;
                        case 4:
                            date.textContent='Today is Thursday';
                            break;
                            case 5:
                                date.textContent='Today is Friday';
                                break;
                                case 6:
                                    date.textContent='Today is Saturday';
                                    break;
                                    default :
                                        date.textContent='Today is ';
                                        break;
    }
}


const handleshow=()=>{
    if(moreInfoButton.textContent==='click here to see more info'){
        moreInfoButton.textContent='click here to see less info'
        showMoreInfo.style.display="flex"
        dateFunc()
        time.textContent= `The time is ${timeMilliSecs}`
    }else{
        moreInfoButton.textContent='click here to see more info'
        showMoreInfo.style.display='none'
    }
}
moreInfoButton.addEventListener('click', handleshow)