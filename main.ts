joystickbit.initJoystickBit()
radio.setGroup(1)
basic.showString("Radio1")
music.play(music.tonePlayable(466, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
basic.forever(function () {
    basic.clearScreen()
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 400) {
        radio.sendNumber(3)
        basic.showLeds(`
            . . # . .
            . . . # .
            # # # # #
            . . . # .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 800) {
        radio.sendNumber(4)
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 400) {
        radio.sendNumber(2)
        basic.showLeds(`
            . . # . .
            . . # . .
            # . # . #
            . # # # .
            . . # . .
            `)
        music.play(music.tonePlayable(139, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
        basic.showLeds(`
            . . # . .
            . # # # .
            # . # . #
            . . # . .
            . . # . .
            `)
    } else {
        radio.sendNumber(0)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
