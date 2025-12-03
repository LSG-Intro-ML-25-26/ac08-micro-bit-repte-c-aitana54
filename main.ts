radio.onReceivedNumber(function (receivedNumber) {
	
})
input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello world")
    radio.sendNumber(randint(1, 6))
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
