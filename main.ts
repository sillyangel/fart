enum RadioMessage {
    message1 = 49434
}
input.onButtonPressed(Button.A, function () {
    led.toggle(0, 2)
    basic.pause(200)
    led.toggle(1, 2)
    basic.pause(200)
    led.toggle(2, 2)
    basic.pause(200)
    led.toggle(3, 2)
    basic.pause(200)
    led.toggle(4, 2)
    basic.pause(200)
    led.toggle(0, 2)
    basic.pause(200)
    led.toggle(1, 2)
    basic.pause(200)
    led.toggle(2, 2)
    basic.pause(200)
    led.toggle(3, 2)
    basic.pause(200)
    led.toggle(4, 2)
})
input.onButtonPressed(Button.B, function () {
    led.toggle(4, 2)
    basic.pause(200)
    led.toggle(4, 2)
})
