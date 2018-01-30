import { PLATFORM, Aurelia } from 'aurelia-framework';

export async function configure(aurelia: Aurelia) {
    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .feature(PLATFORM.moduleName('view-resources/index'));

    await aurelia.start();
    await aurelia.setRoot(PLATFORM.moduleName('app/app'));
}