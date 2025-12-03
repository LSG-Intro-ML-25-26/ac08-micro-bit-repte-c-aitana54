radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 2) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello world")
    radio.sendNumber(randint(1, 6))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
