const pertanyaan = document.getElementById("pertanyaan")
const jawaban = document.getElementById("jawaban")

let init = 0

const botSay = (data) => {
    return [
        "Hallo saya Qiu bot, Siapa nama kamu?",
        `Hallo ${data?.nama}, berapa usia kamu?`,
        `Ohhh ${data?.usia}, hobi kamu apa?`,
        `Wah sama aku juga ${data?.hobi}, btw kamu punya pacar gak?`,
        `Ohh... ${data?.pacar}, ya udah atuh kalo gitu makasih ya`,
    ]
}

pertanyaan.innerHTML = botSay()[0]

let usersData = []

function botStart() {
    init++
    if (init === 1) {
        botDelay({ nama: jawaban.value})
    } else if (init === 2) {
        botDelay({ usia: jawaban.value})
    } else if (init === 3) {
        botDelay({ hobi: jawaban.value})
    } else if (init === 4) {
        botDelay({ pacar: jawaban.value})
    } else if (init === 5) {
        fhinising()
    }
    else {
        botEnd()
    }

}

function botDelay(jawabanUser) {
    console.log({usersData: usersData})
    setTimeout(() => {
        pertanyaan.innerHTML = botSay(jawabanUser)[init]
    }, [1500])
    jawaban.value = ""
    usersData.push(jawaban.value)
}

function fhinising() {
    jawaban.value = "Thanks Juga ya!"
    pertanyaan.innerHTML = `Thank U ${usersData[0]} udah main di Qiu bot`
}

function botEnd() {
    window.location.reload()
}

