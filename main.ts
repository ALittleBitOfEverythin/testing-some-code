// This is the game selector
input.onButtonPressed(Button.A, function () {
    if (Menu_selector > 0) {
        Menu_selector += 1
    }
})
// This opens the selected game then clears the screen and disables the menu inputs
input.onButtonPressed(Button.B, function () {
    if (Menu_selector == 1) {
        Menu_selector = 0
        basic.pause(300)
        basic.clearScreen()
        game1 = 1
    }
    if (Menu_selector == 2) {
        Menu_selector = 0
        basic.pause(300)
        basic.clearScreen()
        game2 = 1
    }
})
let game2 = 0
let game1 = 0
let Menu_selector = 0
Menu_selector = 1
basic.forever(function () {
    // This is the menu selector
    if (Menu_selector == 1) {
        basic.pause(300)
        led.toggle(1, 2)
        led.plot(3, 2)
    } else if (Menu_selector == 2) {
        basic.pause(300)
        led.toggle(3, 2)
        led.plot(1, 2)
    } else if (Menu_selector > 2) {
        Menu_selector = 1
    }
    // This is the same as the "on start" block
    if (game1 == 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
        game1 = 2
    }
    // This is the same as the "forever" block
    if (game1 == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            # . . . #
            . # # # .
            `)
        basic.pause(1000)
    }
    // This is the same as the "on start" block
    if (game2 == 1) {
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
        game2 = 2
    }
    // This is the same as the "forever" block
    if (game2 == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.showLeds(`
            . # . # .
            . . . . .
            . . . . .
            . # # # .
            # . . . #
            `)
        basic.pause(1000)
    }
})
