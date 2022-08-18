let 差分Y = 0
let 差分X = 0
let ステックY = 0
let ステックX = 0
bluetooth.startUartService()
let ステックX0 = pins.analogReadPin(AnalogPin.P0)
let ステックY0 = pins.analogReadPin(AnalogPin.P1)
let X = 2
let Y = 2
led.plot(X, Y)
basic.forever(function () {
    ステックX = pins.analogReadPin(AnalogPin.P0)
    ステックY = pins.analogReadPin(AnalogPin.P1)
    bluetooth.uartWriteString("" + convertToText(ステックX) + "," + convertToText(ステックY))
    led.unplot(X, Y)
    差分X = Math.constrain(ステックX - ステックX0, -200, 200)
    X = Math.round(Math.map(差分X, -200, 200, 0, 4))
    差分Y = Math.constrain(ステックY - ステックY0, -200, 200)
    Y = Math.round(Math.map(差分Y, -200, 200, 0, 4))
    led.plot(X, Y)
})
