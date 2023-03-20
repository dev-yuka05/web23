let today = new Date();

let date = [
    "오늘",
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
    new Date(today.setDate(today.getDate()+1)).toLocaleDateString(),
]

let datei = 0;
fetch("../api/reservation.json")
    .then((response) => response.json())
    .then((data) => {
        data.reservition.forEach(element => {
            console.log(element);
            document.querySelector('.date').innerHTML += `<div class="item">${date[datei]}</div>`;
            element[Object.keys(element)[0]].forEach((item)=>{
                if(item.status == "W"){
                    item.status = "possible"
                }else if(item.status == "R"){
                    item.status = "Proceeding"
                }else{
                    item.status = "complete"
                }
                document.querySelector(`.${item.loc_num}`).innerHTML += `<div class="item"><p class="${item.status}"></p></div>`;
            });
            datei++;
        })
    });