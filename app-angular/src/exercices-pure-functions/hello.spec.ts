import { hello } from "./hello";

describe('hello function', () => {
  it('should return "Hello Romain"', () => {
    expect(hello('Romain')).toBe('Hello Romain');
  });

  it('should return "Hello Romain"', () => {
    // Arrange Act Assert
    // Design pattern de test
    // Synonyme : Given When Then (en BDD)

    // Arrange
    // Mise en place du scénario (paramètres du test)
    const name = 'Romain';

    // Act
    // Exécution du scénario (appel d'une fonction, déclenchement d'un event)
    const result = hello(name);

    // Assert
    // Vérification (expect)
    expect(result).toBe('Hello Romain');
  });

});
