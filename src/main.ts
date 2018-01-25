import { Aurelia } from 'aurelia-framework';
import { bootstrap } from 'aurelia-bootstrapper';

export async function configure(aurelia: Aurelia) {
    console.log('configure');

    aurelia.use
        .standardConfiguration()
        .developmentLogging();

    aurelia.start().then(() => aurelia.setRoot());
}