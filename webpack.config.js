// README
// ======
//
// IMPORTANT:
// The Sulu application admin src assets are under /assets/admin and compile
// to /public/build/admin. To prevent these getting deleted by a compile, don't
// configure the output path directly to /public/build but to a sub directory
// instead, for example /public/build/web.

let Encore = require('@symfony/webpack-encore');

// Manually configure the runtime environment if not already configured yet by
// the "encore" command. It's useful when you use tools that rely on
// webpack.config.js file.
if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}

// Config: web
// ============
//
// Primary frontend assets.

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/web')
    // public path used by the web server to access the output path
    .setPublicPath('/build/web')
    // only needed for CDN's or sub-directory deploy
    //.setManifestKeyPrefix('build/')

    /*
     * ENTRY CONFIG
     *
     * Add 1 entry for each "page" of your app
     * (including one that's included on every page - e.g. "app")
     *
     * Each entry will result in one JavaScript file (e.g. app.js)
     * and one CSS file (e.g. app.css) if your JavaScript imports CSS.
     */
    .addEntry('app', './assets/web/js/app.js')

    .addStyleEntry('theme', './assets/web/css/app.scss')

    // enables Sass/SCSS support
    .enableSassLoader(function (options) {
        // No option customisation.
    }, {
        resolveUrlLoader: false
    })

    // .enablePostCssLoader(function (options) {
    //     options.postcssOptions = {
    //         plugins: [
    //             require('autoprefixer'),
    //             require('postcss-preset-env')
    //         ]
    //     };
    // })


    // When enabled, Webpack "splits" your files into smaller pieces for greater
    // optimization.
    .splitEntryChunks()

    // will require an extra script tag for runtime.js but, you probably want
    // this, unless you're building a single-page app
    .enableSingleRuntimeChunk()

    /*
     * FEATURE CONFIG
     *
     * Enable & configure other features below. For a full
     * list of features, see:
     * https://symfony.com/doc/current/frontend.html#adding-more-features
     */
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSourceMaps(!Encore.isProduction())
    // enables hashed filenames (e.g. app.abc123.css)
    .enableVersioning(Encore.isProduction())

    // enables @babel/preset-env polyfills
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // uncomment to get integrity="..." attributes on your script & link tags
    // requires WebpackEncoreBundle 1.4 or higher
    // .enableIntegrityHashes(Encore.isProduction())

    // uncomment if you're having problems with a jQuery plugin
    //.autoProvidejQuery()
;

module.exports = Encore.getWebpackConfig();

// const webConfig = Encore.getWebpackConfig();
// webConfig.name = 'web';
// Encore.reset();
// module.exports = [webConfig];
