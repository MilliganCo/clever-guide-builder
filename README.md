# Daily Drop 3D Collection

> Experimental React and Three.js interactive collection prototype with synthetic data. See [PUBLICATION.md](PUBLICATION.md) for verification and limits.

Интерактивный mobile-first прототип коллекции 3D-объектов. Пользователь получает ежедневный объект, раскрывает его, добавляет в инвентарь и размещает в собственных пространствах.

## Возможности

- onboarding и локальный профиль;
- ежедневный 3D drop с анимацией раскрытия;
- редкость, наборы и типы объектов;
- инвентарь и пользовательские пространства;
- каталог для исследования коллекции;
- интерактивные Three.js-сцены;
- адаптивная нижняя навигация.

## Стек

React, TypeScript, Vite, React Three Fiber/Three.js, Framer Motion, Tailwind CSS, shadcn/ui и TanStack Query.

## Запуск

```bash
npm install
npm run dev
```

Сборка:

```bash
npm run build
```

## Статус

Функциональный frontend-прототип с mock-данными. Для production нужны backend, авторизация, серверный учёт daily drops, хранение коллекции и проверка лицензий на визуальные ассеты.

## Рекомендуемое имя репозитория

`daily-drop-3d-collection` — текущее имя `clever-guide-builder` не отражает назначение проекта.

См. [CHANGELOG.md](CHANGELOG.md).

## Лицензия

Лицензия пока не добавлена. Для собственного кода рекомендуется MIT после проверки сторонних ассетов.
