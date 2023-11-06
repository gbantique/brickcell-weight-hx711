Brickcell.initHX711(DigitalPin.P0, DigitalPin.P1)
serial.setBaudRate(BaudRate.BaudRate115200)
serial.writeLine("Setup done.")
basic.forever(function () {
    serial.writeString("Weight: ")
    serial.writeLine(Brickcell.readWeight())
    basic.pause(500)
})
