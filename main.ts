radio.onReceivedNumber(function (receivedNumber) {
    serial.writeLine("" + (receivedNumber))
    privatekey(receivedNumber)
})
function privatekey (num: number) {
    if (num == 1234) {
        serial.writeLine("PS :" + radio.receivedPacket(RadioPacketProperty.SignalStrength))
        music.startMelody(music.builtInMelody(Melodies.Entertainer), MelodyOptions.OnceInBackground)
        BL()
    } else {
        music.setBuiltInSpeakerEnabled(true)
        music.setVolume(47)
        music.startMelody(music.builtInMelody(Melodies.Blues), MelodyOptions.OnceInBackground)
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
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendString("fart")
})
// input
input.onButtonPressed(Button.A, function () {
    loadingscreen()
})
radio.onReceivedString(function (receivedString) {
    serial.writeLine(receivedString)
    basic.showString(receivedString)
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
function BL () {
    for (let index = 0; index < 4; index++) {
        led.toggle(4, 4)
        basic.pause(500)
        led.toggle(4, 4)
        basic.pause(500)
    }
}
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(1234)
})
function publickey (num: number) {
    serial.writeLine("" + (num))
}
let nukecodes = [
"1",
"2",
"3",
"4",
"5"
]
basic.forever(function () {
    radio.setGroup(1)
})
