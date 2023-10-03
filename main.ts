controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    message = "x = " + Math.round(locatorSprite.x) + ", y = " + Math.round(locatorSprite.y)
    if (locatorSprite.y < scene.screenHeight() / 2) {
        game.showLongText(message, DialogLayout.Bottom)
    } else {
        game.showLongText(message, DialogLayout.Top)
    }
})
let message = ""
let locatorSprite: Sprite = null
locatorSprite = sprites.create(img`
    . . 1 . . 1 . . 
    . . 1 . . 1 . . 
    1 1 1 . . 1 1 1 
    . . . . . . . . 
    . . . . . . . . 
    1 1 1 . . 1 1 1 
    . . 1 . . 1 . . 
    . . 1 . . 1 . . 
    `, SpriteKind.Player)
controller.moveSprite(locatorSprite, 25, 25)
