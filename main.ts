function vowel (text: string) {
    return text.charAt(randint(0, text.length - 1))
}
function consonant (text: string) {
    return text.charAt(randint(0, text.length - 1))
}
function Krule () {
    return Krules[randint(0, Krules.length - 1)]
}
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Krule()))
})
let Krules: string[] = []
let Kconst = "bcDgHjlmnpqQStvwy'''"
let Kvowel = "aeouyI"
Krules = ["CVVC", "CVC", "CCVVC", "CVVC", "CV"]
