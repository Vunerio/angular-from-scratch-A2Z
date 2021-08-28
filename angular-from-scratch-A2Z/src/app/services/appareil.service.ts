export class AppareilService {
  appareils = [
    {
      name: 'Machine à laver',
      status: 'Éteint'
    },
    {
      name: 'Télévion',
      status: 'Allumé'
    },
    {
      name: 'Ordinateur',
      status: 'Éteint'
    }
  ];

  switchOnAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'Allumé';
    }
  }

  switchOffAll() {
    for (let appareil of this.appareils) {
      appareil.status = 'Éteint';
    }
  }

  switchOnOne (index: number) {
    this.appareils[index].status = 'Allumé';
  }

  switchOffOne (index: number) {
    this.appareils[index].status = 'Éteint';
  }
}