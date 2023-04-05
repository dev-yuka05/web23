
let today = new Date();

let date = [
    {date:"오늘",day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
    {date:new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),day:new Date(today).getDay()},
]

let datei = 0;
fetch("./api/reservation.json")
    .then((response) => response.json())
    .then((data) => {
        data.reservition.forEach(element => {
            document.querySelector('.date').innerHTML += `<div class="item">${date[datei].date}</div>`;
            element[Object.keys(element)[0]].forEach((item)=>{
                if(item.status == "W"){
                    item.status = "possible"
                }else if(item.status == "R"){
                    item.status = "Proceeding"
                }else{
                    item.status = "complete"
                }
                document.querySelector(`.${item.loc_num}`).innerHTML += `<div class="item"><p id="${item.loc_num} ${date[datei].day}" class="${item.status}"></p></div>`;
            });
            datei++;
        });
    });

setTimeout(()=>{
    document.querySelectorAll('.complete').forEach((el)=>{
        el.addEventListener('click',()=>{
            document.querySelector('.msg-modal').style.display = "block";
            setTimeout(()=>{ document.querySelector('.msg-modal').style.display = "none"},700)
        });
    });

    document.querySelectorAll('.Proceeding').forEach((el)=>{
        el.addEventListener('click',()=>{
            document.querySelector('.msg-modal').style.display = "block";
            setTimeout(()=>{ document.querySelector('.msg-modal').style.display = "none"},700)
        });
    });

    document.querySelectorAll('.possible').forEach((el)=>{
        el.addEventListener('click',(event)=>{
            document.querySelector('.modal').style.display = "block";
            let e = event.target.id.split(' ');
            if(e[1]==6||e[1]==0){
                if(e[0].startsWith('T')){
                    console.log(e[0]);
                }else{
                    console.log("dd");
                }
            }
        });
    });
}, 1000);