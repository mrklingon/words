function vowel (text: string) {
    return text.charAt(randint(0, text.length - 1))
}
function consonant (text: string) {
    return text.charAt(randint(0, text.length - 1))
}
let Kconst = "bcDgHjlmnpqQStvwy'''"
let Kvowel = "aeouyI"
let Krules = ["CVVC", "CVC", "CCVVC", "CVVC", "CV"]
