controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 2 2 2 2 2 2 2 2 2 . . . . 
        . . 2 5 5 5 4 4 4 4 1 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spaceCraft, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.spray, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.halo, 500)
    info.changeLifeBy(-1)
})
let alien: Sprite = null
let projectile: Sprite = null
let spaceCraft: Sprite = null
effects.starField.startScreenEffect()
spaceCraft = sprites.create(assets.image`SpaceCraft`, SpriteKind.Player)
controller.moveSprite(spaceCraft, 200, 200)
spaceCraft.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    alien = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 7 7 7 7 . . . 7 7 7 7 . . . 
        . . f 1 7 7 . . . 1 1 7 7 . . . 
        . . 1 1 7 7 . . . f 1 7 . . . . 
        . . . . 7 . . . . . 7 . . . . . 
        . . 7 7 7 7 7 7 7 7 7 . 7 . . . 
        . . 7 7 7 7 7 7 7 7 7 7 7 . . . 
        . . 7 f f f 7 7 7 7 7 7 7 . . . 
        . . 7 7 7 7 . . 7 7 7 7 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    alien.setVelocity(-100, 0)
    alien.setPosition(160, randint(10, 110))
})
