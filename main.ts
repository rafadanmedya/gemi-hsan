controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . c c c c c . . . . 
        . . . . . . c d d d d d c . . . 
        . . . . . . c c c c c d c . . . 
        . . . . . c 4 4 4 4 d c c . . . 
        . . . . c d 4 4 4 4 4 1 c . . . 
        . . . c 4 4 1 4 4 4 4 4 1 c . . 
        . . c 4 4 4 4 1 4 4 4 4 1 c c c 
        . c 4 4 4 4 4 1 c c 4 4 1 4 4 c 
        . c 4 4 4 4 4 1 4 4 f 4 1 f 4 f 
        f 4 4 4 4 f 4 1 c 4 f 4 d f 4 f 
        f 4 4 4 4 4 4 1 4 f f 4 f f 4 f 
        . f 4 4 4 4 1 4 4 4 4 c b c f f 
        . . f f f d 4 4 4 4 c d d c . . 
        . . . . . f f f f f c c c . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -2, -68)
    projectile.startEffect(effects.warmRadial, 1000)
})
let projectile: Sprite = null
let mySprite: Sprite = null
effects.starField.startScreenEffect()
mySprite = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d e e d d d d e d f . . 
    . c d c d d d d c d d e f f . . 
    . c d d c c c c d d d e f f f f 
    . . c d d d d d d d e f f b d f 
    . . . c d d d d e e f f f d d f 
    . . . . f f f e e f e e e f f f 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
mySprite.setFlag(SpriteFlag.StayInScreen, true)
