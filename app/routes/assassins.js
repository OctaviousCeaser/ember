import Route from '@ember/routing/route';

export default class AssassinsRoute extends Route {
    model() {
        return ['Cassius Longinus', 'Marcus Brutus', 'Decimus Junius Brutus Albinus'];
    }
}
