let music;
function start() {
    music = new Audio("nhac.mp3");
    music.play();
}
function nhapSo() {
    start();
    document.getElementById("date").innerHTML =  new Date();
}
function quaySo() {
    let nums = [1, 2, 3, 3, 3, 3, 4, 1];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < nums[i]; j++) {
            document.getElementById(`demo${i}-${j}`).innerHTML = Math.floor(Math.random() * 99) + 1;
        }
    }
    x.setAllKetQua();

    let myVar = setInterval(myBingo, 1000);

    function myBingo() {
        y.getBingo(num);
        clearInterval(myVar)
    }

}


class XoSo {
    constructor(date) {
        this.date = date;
        this.nums = [1, 2, 3, 3, 3, 3, 4, 1];
        this.special = [];
        this.first = [];
        this.second = [];
        this.third = [];
        this.four = [];
        this.five = [];
        this.six = [];
        this.seven = [];

    }


    setKetqua(giai, number) {
        let arr = [];
        for (let i = 0; i < number; i++) {
            let rand = document.getElementById(`demo${giai}-${i}`).innerHTML;
            arr.push(rand);
        }
        // }
        console.log(arr);
        switch (giai) {
            case 7:
                this.special = arr;
                break;
            case 0:
                this.first = arr;
                break;
            case 1:
                this.second = arr;
                break;
            case 2:
                this.third = arr;
                break;
            case 3:
                this.four = arr;
                break;
            case 4:
                this.five = arr;
                break;
            case 5:
                this.six = arr;
                break;
            case 6:
                this.seven = arr;
                break;
        }

    }

    setAllKetQua() {
        for (let i = 0; i < 8; i++) {
            this.setKetqua(i, this.nums[i])
        }
    }

    getAll() {
        let arrs = [this.special, this.first, this.second, this.third, this.four, this.five, this.six, this.seven];
        return arrs;
    }


}

class XoSoQuanLy {
    constructor(name) {
        this.name = name;
        this.xoso = XoSo;
        this.xosoo = [];
    }

    setXoSo(vietlot) {
        this.xoso = vietlot;
        this.xosoo = vietlot.getAll()
    }

    getBingo(number) {
        for (let i = 0; i < this.xosoo.length; i++) {
            for (let j = 0; j < this.xosoo[i].length; j++) {
                if (this.xosoo[i].includes(number)) {
                    alert("Chúc mừng bạn đã ăn xèng !!!! " + i);
                    return;
                }
            }
        }
        alert("Bạn đen lắm, thêm tiền đi !!")
    }
}

let x = new XoSo("30-09-2020");
let y = new XoSoQuanLy();


y.setXoSo(x);
let num = document.getElementById("nhapso").value