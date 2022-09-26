radio.onReceivedNumber(function (receivedNumber) {
    basic.showString("" + (receivedNumber))
    serial.writeLine("" + (receivedNumber))
})
function privatekey (num: number) {
    if (num == 1234) {
        radio.sendString("right code")
    } else {
    	
    }
}
function loadingscreen () {
    led.toggle(0, 0)
    basic.pause(200)
    led.toggle(1, 0)
    basic.pause(200)
    led.toggle(2, 0)
    basic.pause(200)
    led.toggle(3, 0)
    basic.pause(200)
    led.toggle(4, 0)
    basic.pause(200)
    led.toggle(0, 0)
    basic.pause(200)
    led.toggle(1, 0)
    basic.pause(200)
    led.toggle(2, 0)
    basic.pause(200)
    led.toggle(3, 0)
    basic.pause(200)
    led.toggle(4, 0)
}
// input
input.onButtonPressed(Button.A, function () {
    loadingscreen()
})
input.onButtonPressed(Button.B, function () {
    led.toggle(4, 2)
    basic.pause(200)
    led.toggle(4, 2)
})
input.onGesture(Gesture.Shake, function () {
    led.toggle(1, 3)
    basic.pause(200)
    led.toggle(1, 3)
})
function publickey (num: number) {
    serial.writeLine("" + (num))
}
basic.forever(function () {
    radio.setGroup(1)
})
