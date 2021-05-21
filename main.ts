input.onButtonPressed(Button.A, function () {
    countdown = randint(5, 20)
    while (countdown != 0) {
        countdown += -1
        basic.showIcon(IconNames.SmallDiamond)
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.showString("A")
})
let countdown = 0
basic.showString("A")
