/* *Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx */

const numberOfRows = 20;
const symbol = 'x';

OutputSymbolSlide(numberOfRows, symbol);

function OutputSymbolSlide(NumberOfRows, Symbol) {
    let outputString = '';
    for (let i = 0; i < NumberOfRows; i++) {
        console.log(outputString = String(outputString + Symbol));
    }
}
