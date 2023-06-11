function nuevo_enemigo () {
    for (let index = 0; index < 10; index++) {
        list.unshift(game.createSprite(randint(0, 4), randint(0, 4)))
    }
}
input.onButtonPressed(Button.A, function () {
    cuadrado.change(LedSpriteProperty.Y, -1)
})
input.onButtonPressed(Button.B, function () {
    cuadrado.change(LedSpriteProperty.Y, 1)
})
let list: game.LedSprite[] = []
let cuadrado: game.LedSprite = null
basic.clearScreen()
cuadrado = game.createSprite(2, 4)
let tiempo = 500
nuevo_enemigo()
basic.forever(function () {
    if (input.acceleration(Dimension.X) > 600) {
        cuadrado.change(LedSpriteProperty.X, 1)
    }
    if (input.acceleration(Dimension.X) < -600) {
        cuadrado.change(LedSpriteProperty.X, -1)
    }
    for (let value of list) {
        if (cuadrado.isTouching(value)) {
            game.addScore(-1)
            cuadrado.delete()
            game.gameOver()
        }
    }
})
