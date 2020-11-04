function vowel (text: string) {
    return text.charAt(randint(0, text.length - 1))
}
function consonant (text: string) {
    return text.charAt(randint(0, text.length - 1))
}
function Krule () {
    return Krules[randint(0, Krules.length - 1)]
}
function Make_Word (Rule: string, Cons: string, Vows: string) {
    NewWord = ""
    for (let index = 0; index <= Rule.length - 1; index++) {
        if ("C" == Rule.charAt(index)) {
            NewWord = "" + NewWord + consonant(Cons)
        } else {
            NewWord = "" + NewWord + vowel(Vows)
        }
    }
    return NewWord
}
input.onButtonPressed(Button.B, function () {
    basic.showString("" + (Make_Word(Krule(), Kconst, Kvowel)))
})
let NewWord = ""
let Krules: string[] = []
let Kvowel = ""
let Kconst = ""
Kconst = "bcDgHjlmnpqQStvwy'''"
Kvowel = "aeouyI"
Krules = ["CVVC", "CVC", "CCVVC", "CVVC", "CV"]
