export class AppareilService {
  appareils = [
    {
      id: 1,
      name: 'Machine à laver',
      status: 'Éteint'
    },
    {
      id: 2,
      name: 'Télévion',
      status: 'Allumé'
    },
    {
      id: 3,
      name: 'Ordinateur',
      status: 'Éteint'
    }
  ];

  getAppareilById(id: number) {
    const appareil = this.appareils.find(
      (appareilOject) => {
        return appareilOject.id === id;
      }
    );
    return appareil;
  }
  
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