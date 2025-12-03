input.onButtonPressed(Button.A, function () {
    radio.sendString("Hello world")
})
radio.onReceivedString(function (receivedString) {
	
})
radio.setGroup(1)
