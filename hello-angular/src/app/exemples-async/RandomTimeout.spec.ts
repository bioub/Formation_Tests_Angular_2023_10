import { RandomTimeout } from "./RandomTimeout";

describe('RandomTimeout class', () => {
  let randomTimeout: RandomTimeout;

  // rend les tests indépendants en réinitialisant l'objet
  // avant chaque test
  beforeEach(() => {
    randomTimeout = new RandomTimeout();
  });

  describe('randomOperations method', () => {

    // Va fail tout le temps car par défaut jasmine a un timeout de 5s pour chaque test
    // it('should set val1 and val2', (done) => {
    //   randomTimeout.randomOperations();

    //   setTimeout(() => {
    //     expect(randomTimeout.val1).toBe('ABC');
    //     expect(randomTimeout.val2).toBe('XYZ');
    //     done();
    //   }, 10000);
    // });

    // avec spyOn on peut rendre la fonction async synchrone
    // it('should set val1 and val2', () => {
    //   spyOn(window, 'setTimeout').and.callFake(((cb: any, delay: any) => {cb()}) as any)
    //   randomTimeout.randomOperations();
    //   expect(randomTimeout.val1).toBe('ABC');
    //   expect(randomTimeout.val2).toBe('XYZ');
    // });

    // setTimeout et setInterval peuvent être mockés plus simplement avec jasmine
    it('should set val1 and val2', () => {
      jasmine.clock().install(); // créé des fonction setTimeout et setInterval synchrone (à faire dans un beforeEach)
      randomTimeout.randomOperations();

      jasmine.clock().tick(10000);

      expect(randomTimeout.val1).toBe('ABC');
      expect(randomTimeout.val2).toBe('XYZ');
      jasmine.clock().uninstall(); // restore les fonctions d'origine (à faire dans un afterEach)
    });

  });

});
