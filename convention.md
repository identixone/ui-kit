# Конвенции по написанию компонентов

## Структура файлов

---

### Общие правила

- Создаем
  - Папку - если это реакт компонент или компонент имеет дочерние компоненты, или комопнент верхнего уровня
  - Файл во всех остальных случаях (нет детей, не реакт-компонент, не компонент верхнего уровня)
- Папка или файл с компонентом называется именем компонента в `CamelCase`
- В папке лежат
  - Все дочерние компоненты
  - `hooks`, специфичные для данного компонента
  - Индексный файл компонента `index.jsx`
  - `Styled` обертка для компонента
  - Файл со `stories` для данного компонента
  - Папка `__tests__` с тестами для этого компонента
- В название компонента включаем слово `Styled` только если это обертка для индексного компонента
- Используем `CamelCase` для всех файлов с реакт-компонентами (`.jsx`) и `kebab-case` для остальных `.js` файлов

### Import/Export

1. Используем только [нейминг экспорт](<https://2ality.com/2014/09/es6-modules-final.html#named-exports-(several-per-module)>)
2. Все экспорты компонента всегда внизу файла отдельной директивой
3. Если у компонента есть `styled` обертка, она тоже экспортится из `index` файла с названием `StyledComponentName`

### Пример

```bash
AwesomeComponent
├── __tests__ # директория с тестами для компонента
│   ├── test-utils # все необходимые уникальные данные для тестов
│   │   ├── ...
│   │   ├── constants.js
│   │   └── utils.js
│   └── AwesomeComponent.test.js # файл с тестами
├── hooks # директория с `hooks`, специфичными для данного компонента
│   ├── index.jsx
│   └── awesome-component-hook.js
├── AwesomeComponentReactChild # дочерний реакт-компонент
│   ├── index.jsx
│   └── StyledAwesomeComponentReactChild
├── AwesomeComponentStyledChild.jsx # дочерний `styled`-компонент
├── ... # другие дочерние компоненты
├── AwesomeComponentContext.js # файл с конекстом компонента
├── AwesomeComponent.stories.js # файл со `stories` компонента
├── AwesomeComponent.resources.js # файл с переводами строк компонента
└── index.jsx # индексный файл с логикой и экспортом компонента
```

## Пример файла реакт-компонента

---

```jsx
// Импорт реакта,проп тайпсов
import React from "react";
import PropTypes from "prop-types";

// Импорт hocs, hooks
import { usePrevious, useState } from "react";
import { useUpdateEffect } from "react-use";
import { useTranslation } from "react-i18n";

// Импорт контекстов
import { SomeLibContext } from "some-lib";

// Импорт дочерних компонентов
import { StyledAwesomeComponent } from "./StyledAwesomeComponent";
import { AwesomeComponentChild } from "./AwesomeComponentChild";
import { AnotherAwesomeComponent } from "comoponents";
const { SomeChild } = AnotherAwesomeComponent;
import { SomeIcon } from "icons";

// Импорт хелперов, констант
import { brandColor } from "colors";
import { brandImage } from "images";
import { isEqual } from "lodash-es";
import { resources } from "./AwesomeComponent.resources.js";

/** деструктуризация пропсов
 * в API компонента обязательно должен быть `data-testid` и `className` пропсы
 */
function AwesomeComponent({
  "data-testid": testId,
  className,
  prop1,
  prop2,
  children,
}) {
  const { t, i18n } = useTranslation();
  // подключение переводов для компонента ns - `AwesomeComponent`
  i18n.addResourceBundle("en", "AwesomeComponent", resources.en);
  i18n.addResourceBundle("ru", "AwesomeComponent", resources.ru);

  // использование hooks
  const [some, setSome] = useState(false);
  const prevSome = usePrevious(some);

  useUpdateEffect(() => {
    if (!isEqual(prevSome, some)) {
      console.log(some);
    }
  }, [some]);

  // обработчики и доп функции
  function handleChildClick() {
    console.log("✌️");
  }

  // вычисляемые данные
  const notSome = !some;
  const someSharedState = {
    some,
    notSome,
  };

  // обязательно прокидываем className и data-testid в `styled`-обертку
  return (
    <StyledAwesomeComponent
      data-testid={testId}
      className={className}
      prop1={prop1}
      prop2={prop2}
      notSome={notSome}
      onClick={setSome}
      color={brandColor}
    >
      {some && <SomeIcon />}
      <SomeChild />
      <AwesomeComponentChild onClick={handleChildClick} src={brandImage}>
        {children(someSharedState)}
      </AwesomeComponentChild>
      <p>{t("AwesomeComponent:title")}</p>
    </StyledAwesomeComponent>
  );
}

// проп тайпсы компонента
AwesomeComponent.propTypes = {
  "data-testid": PropTypes.string,
  className: PropTypes.string,
  // ...
};

// значение по умолчанию пропсов компонента
AwesomeComponent.defaultProps = {
  // значение по умолчанию для `data-testid`
  "data-testid": "awesome-component",
  prop1: "some default value",
  // ...
};

// compound components
AwesomeComponent.Child = AwesomeComponentChild;

export { AwesomeComponent, StyledAwesomeComponent };
```
