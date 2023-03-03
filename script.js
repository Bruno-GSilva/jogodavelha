const box = document.querySelectorAll('.box')
const vez = document.getElementById('vez')
const btn = document.getElementById('btn')

btn.addEventListener('click', () => {
    btn.classList.toggle('active')
})
let win = []

let winP = {
    win1: [1, 2, 3],
    win2: [4, 5, 6],
    win3: [7, 8, 9],
    win4: [1, 4, 7],
    win5: [2, 5, 8],
    win6: [3, 6, 9],
    win7: [1, 5, 9],
    win8: [3, 5, 7],
}

let { win1, win2, win3, win4, win5, win6, win7, win8 } = winP


function gameboard(id) {
    box.forEach((element, index) => {

        let caixa = `box${id}`;
        let vezX = false;
        let vezO = false;
        

        if (btn.classList.contains('active')) {
            vezX = true
        } else {
            vezO = true
        }

        if (element.id == caixa) {
            if (vezX == true) {
                element.innerHTML = "x"
            }
            if (vezO == true) {
                element.innerHTML = "O"
            }
            win.push(id)

            
        }
        
    });
    
}
