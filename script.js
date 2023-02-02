let w;
let startPoint = {
    x: 0,
    y: 0
}
let span = {
    x: 100,
    y: 50,
}


let arr = []
    for (let i = 0; i < 30; i++) {
        arr.push(Math.floor((Math.random() * (1 - 99) + 99))) //в массиве будут рандомные числа в количестве до числа b
    }
    console.log(arr)


function foo(){
    let w = window.open("", "", `width=500, height=500, top=200, left=600`);
    w.document.write(`<body style="background: white">
    <table>
        <caption>Таблица</caption>
        <tr>
            <td>${arr[0]}</td>
            <td>${arr[1]}</td>
            <td>${arr[2]}</td>
            <td>${arr[3]}</td>
            <td>${arr[4]}</td>
        </tr>
        <tr>
            <td>${arr[4]}</td>
            <td>${arr[5]}</td>
            <td>${arr[6]}</td>
            <td>${arr[7]}</td>
            <td>${arr[8]}</td>
        </tr>
        <tr>
            <td>${arr[9]}</td>
            <td>${arr[10]}</td>
            <td>${arr[11]}</td>
            <td>${arr[12]}</td>
            <td>${arr[13]}</td>
        </tr>
        <tr>
            <td>${arr[14]}</td>
            <td>${arr[15]}</td>
            <td>${arr[16]}</td>
            <td>${arr[17]}</td>
            <td>${arr[18]}</td>
        </tr>
        <tr>
            <td>${arr[19]}</td>
            <td>${arr[20]}</td>
            <td>${arr[21]}</td>
            <td>${arr[22]}</td>
            <td>${arr[23]}</td>
        </tr>
        <tr>
            <td>${arr[0]}</td>
            <td>${arr[1]}</td>
            <td>${arr[2]}</td>
            <td>${arr[3]}</td>
            <td>${arr[4]}</td>
        </tr>
    </table>
    </body>`)
    windows.push(w);
    startPoint.x += span.x;
    startPoint.y += span.y;
}

// function pzdts(){
//     for(let j = 0; j < 5; j++){
//         console.log(`<td>${arr[j]}</td>`)
//     }
// }
// pzdts()
