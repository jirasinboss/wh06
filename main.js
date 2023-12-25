const root = document.querySelector('#root')
const btnAdd = document.querySelector('.btn-add')
const suminfo = document.querySelector('.show-sum')

let total = 0
function counter(){
    let countNum = 0



function makeElemnet(tag, attr_n, attr_v, counter){
    let  output = document.createElement(tag)
    output.setAttribute(attr_n,attr_v)
    output.textContent = counter
    return output
}

function updatCConter(n){
    if(countNum + n < 0){
        return
    }
    countNum += n
    total += n
    number.textContent = countNum
    suminfo.textContent = `Sum = ${total}`
}
    const delCounter = (e) =>{
        console.log (e.target.closest('.counter'))
        e.target.closest('.counter').remove()
    }


const counter = makeElemnet('div','class','counter')
const btnInc = makeElemnet('button','class','btn-inc','+')
const number = makeElemnet('h3','class','number','0')
const btnDec = makeElemnet('button','class','btn-dec','-')
const btnClr = makeElemnet('button','class','btn-clr','C')
const btnDel = makeElemnet('button','class','btn-del','X')


btnInc.addEventListener('click', () => updatCConter(1))
btnDec.addEventListener('click', () => updatCConter(-1))
btnClr.addEventListener('click', () => updatCConter(-countNum))
btnDel.addEventListener('click', delCounter)

counter.append(btnInc,number,btnDec,btnClr,btnDel)

return counter;
}

function hd1AddCounter() {
    root.append(counter())
}
btnAdd.addEventListener('click', hd1AddCounter)
