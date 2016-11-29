var game = new Phaser.Game(870, 650, Phaser.AUTO, 'numeracy_ninjas', {


    preload: function(){

        game.load.image('splash', 'images/welcomeScreen.png');
        game.load.image('bg', 'images/bg.png');

    },

    create: function () {

        this.centreAndScaleCanvas();

        game.stage.backgroundColor = "#bea34f";

        this.bg = game.add.sprite(game.world.centerX, game.world.centerY, 'bg');
        this.bg.anchor.setTo(0.5, 0.5);
        this.bg.visible = false;

        this.splash = game.add.sprite(game.world.centerX, game.world.centerY, 'splash');
        this.splash.anchor.setTo(0.5, 0.5);

        this.splash.inputEnabled = true;

        this.splash.events.onInputDown.add(this.gameStart, this);

    },

    update: function(){},

    gameStart: function(){

        this.splash.visible = false;
        this.splash.inputEnabled = false;

        this.bg.visible = true;

        this.textQuestion = game.add.text(game.world.centerX-50, 100, '7 x _ = 49 ?', {fill: '#FFFFFF', align: 'centre' });


    },

    centreAndScaleCanvas: function(){
        this.input.maxPointers = 1;
        this.disableVisibilityChange = true;

        this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
        this.scale.minWidth = 435;
        this.scale.minHeight = 325;
        this.scale.maxWidth = 870;
        this.scale.maxHeight = 650;
        this.scale.pageAlignHorizontally = true;

        if (game.device.desktop) {
            this.scale.forceOrientation(true, false);
        }
    }



});