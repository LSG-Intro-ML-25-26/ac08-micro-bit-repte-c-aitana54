input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello world")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
