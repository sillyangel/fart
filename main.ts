enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(2, 3)
    basic.showString("#!")
})
input.onButtonPressed(Button.A, function () {
    led.toggle(0, 2)
})
function Pause () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . # . # .
        . # . # .
        . . . . .
        `)
}
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(4)
})
radio.setGroup(1)
basic.forever(function () {
	
})
