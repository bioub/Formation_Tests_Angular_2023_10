# Exercices

## configureTestingModule

Exécuter les tests avec `ng test`

Des erreurs s'affichent car les modules de test sont mal configurés :

```
Failed: Test contained console error:
NG0304: 'app-todo-form' is not a known element:
```

Modifier les config de module dans les méthodes `configureTestingModule` de sorte :
- à déclarer les composants, pipes, directives utilisés dans les templates
- à importer les modules qui contiennent des composants, pipes, directives (`FormsModule`, `CommonModule`...)
- à importer les modules qui fournissent les configs de services (`providers`) en privilégiant les modules de tests lorsqu'ils existent (`HttpClientTestModule`...)

Si votre projet est Angular 14 ou plus, vous pouvez remplacer le workaround :

```
beforeAll(() => {
  originalConsoleError = console.error;
  console.error = function (message?: any, ...optionalParams: any[]): void {
    const params = optionalParams ? `\nParams: ${optionalParams}` : '';
    fail(`Test contained console error:\n${message}${params}`);
  };
});

afterAll(() => {
  console.error = originalConsoleError;
});
```

par les propriétés suivantes dans `configureTestingModule` :

```
errorOnUnknownElements: true,
errorOnUnknownProperties: true,
```
