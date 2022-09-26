def on_received_number(receivedNumber):
    basic.show_string("" + str((receivedNumber)))
radio.on_received_number(on_received_number)

def loadingscreen():
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
# input

def on_button_pressed_a():
    loadingscreen()
    radio.set_group(1)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    led.toggle(4, 2)
    basic.pause(200)
    led.toggle(4, 2)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    led.toggle(1, 3)
    basic.pause(200)
    led.toggle(1, 3)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

serial.write_line("fart")