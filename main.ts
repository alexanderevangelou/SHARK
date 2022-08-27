namespace SpriteKind {
    export const deatals = SpriteKind.create()
    export const weakEnemy = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
info.onCountdownEnd(function () {
    current_level += 1
    if (current_level == 2) {
        if (info.score() >= 20) {
            game.showLongText("YOU SURVIVED! if your mum was here then she will be impressed. now you know how to live here there is nothing to do but to eat  ", DialogLayout.Full)
            game.over(true)
        } else {
            game.over(false)
        }
    } else {
        createLevel()
    }
})
function createLevel () {
    if (current_level == 1) {
        scene.setBackgroundImage(assets.image`ocean2`)
        info.startCountdown(25)
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.weakEnemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`laser`, Shark, 100, 0)
    projectile.setKind(SpriteKind.Projectile)
    animation.runImageAnimation(
    Shark,
    assets.animation`shooting shark`,
    100,
    false
    )
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.destroy(effects.disintegrate, 500)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.weakEnemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 500)
    sprite.destroy(effects.disintegrate, 500)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Shark,
    assets.animation`swim left`,
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    Shark,
    assets.animation`swim right`,
    200,
    true
    )
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 200)
    info.changeScoreBy(1)
    animation.runImageAnimation(
    Shark,
    assets.animation`shooting shark`,
    100,
    false
    )
})
let submerine: Sprite = null
let Fish: Sprite = null
let projectile: Sprite = null
let Seawead: Sprite = null
let Shark: Sprite = null
let current_level = 0
scene.setBackgroundColor(8)
scene.setBackgroundImage(assets.image`ocean1`)
game.showLongText("one day there was a baby shark. YOU are the baby shark. once you were growing up your mum got eaten. you need to survive in this place near shark eater street ", DialogLayout.Full)
info.startCountdown(30)
let oneAchivement = 0
current_level = 0
Shark = sprites.create(assets.image`shark`, SpriteKind.Player)
info.setLife(3)
controller.moveSprite(Shark)
Shark.setStayInScreen(true)
animation.runImageAnimation(
Shark,
assets.animation`swim right`,
200,
true
)
for (let index = 0; index < 10; index++) {
    Seawead = sprites.create(assets.image`decoration`, SpriteKind.deatals)
    Seawead.setPosition(randint(0, 160), 96)
}
forever(function () {
    if (info.score() == 20) {
        if (oneAchivement == 1) {
            game.showLongText("achivement: know how to survive", DialogLayout.Full)
            oneAchivement += 1
        }
    }
})
forever(function () {
    if (info.score() == 10) {
        if (oneAchivement == 0) {
            game.showLongText("achivement: good enough", DialogLayout.Full)
            oneAchivement += 1
        }
    }
})
forever(function () {
    music.playMelody("G B A G C5 B A B ", 120)
    music.playMelody("C5 A B G A F G E ", 120)
    music.playMelody("C D C E C F C G ", 120)
    music.playMelody("C A C B C C5 B A ", 120)
})
game.onUpdateInterval(2000, function () {
    Fish = sprites.create(assets.image`food`, SpriteKind.Food)
    Fish.setPosition(scene.screenWidth(), randint(5, 115))
    Fish.vx = -75
    animation.runImageAnimation(
    Fish,
    assets.animation`animated food`,
    200,
    true
    )
})
game.onUpdateInterval(1000, function () {
    submerine = sprites.create(assets.image`enemy`, SpriteKind.weakEnemy)
    submerine.setPosition(scene.screenWidth(), randint(5, 115))
    submerine.vx = -75
    animation.runImageAnimation(
    submerine,
    assets.animation`animated enemy`,
    50,
    true
    )
})
forever(function () {
    if (info.score() == 30) {
        if (oneAchivement == 1) {
            game.showLongText("achivement: very hungry", DialogLayout.Full)
            oneAchivement += 1
        }
    }
})
