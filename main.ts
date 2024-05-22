radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 300) {
        reel = randint(1, 9)
        basic.pause(500)
        if (reel == 1) {
            basic.showIcon(IconNames.Happy)
            radio.sendValue("C", 1)
        }
        if (reel == 2) {
            basic.showIcon(IconNames.Sad)
            radio.sendValue("C", 2)
        }
        if (reel == 3) {
            basic.showIcon(IconNames.Confused)
            radio.sendValue("C", 3)
        }
        if (reel == 4) {
            basic.showIcon(IconNames.Angry)
            radio.sendValue("C", 4)
        }
        if (reel == 5) {
            basic.showIcon(IconNames.Asleep)
            radio.sendValue("C", 5)
        }
        if (reel == 6) {
            basic.showIcon(IconNames.Surprised)
            radio.sendValue("C", 6)
        }
        if (reel == 7) {
            basic.showIcon(IconNames.Silly)
            radio.sendValue("C", 7)
        }
        if (reel == 8) {
            basic.showIcon(IconNames.Fabulous)
            radio.sendValue("C", 8)
        }
        if (reel == 9) {
            basic.showIcon(IconNames.Meh)
            radio.sendValue("C", 9)
        }
        radio.sendString("Go")
    }
})
let reel = 0
basic.showLeds(`
    # # # . .
    . . . # .
    . # # . .
    . . . # .
    # # # . .
    `)
radio.setGroup(1)
