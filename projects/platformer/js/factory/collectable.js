(function (window) {
    'use strict';
    window.opspark = window.opspark || {};
    let opspark = window.opspark;
    window.opspark.collectable = window.opspark.collectable || {};
    
    opspark.collectable.factory = function (game) {
        game.collectable = game.add.group();
        game.collectable.enableBody = true;
        
        function create(type, x, y, gravity, bounce) {
            var collectable = game.collectable.create(x, y, type.assetKey);
            collectable.type = type;
            
            /*
             * Extra adjustments or configuration.
             */
            switch (type.assetKey) {
                case 'db':
                    collectable.body.height = 44;
                    break;
                    
                case 'grace':
                case 'kennedi':
                    collectable.scale.x = collectable.scale.y = 0.9;
                    break;
                
                default:
                    // code
                    createCollectable(type.db, 500, 550, 6, 0.7);
                    createCollectable(type.steve, 200, 170, 6, 0.7);
                    createCollectable(type.max, 300, 400, 6, 0.7);

            }
            if (gravity) collectable.body.gravity.y = gravity;
            if (bounce) collectable.body.bounce.y = bounce + Math.random() * 0.2;
        }
        opspark.collectable.create = create;
    };
})(window);