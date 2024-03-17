input.onGesture(Gesture.Shake, function () {
    music.play(music.stringPlayable("C5 A B G E F C D ", 120), music.PlaybackMode.UntilDone)
    basic.showLeds(`
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        `)
})
