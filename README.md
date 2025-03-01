Задание 1
В задании функции выполняются в рамках страницы/маршрута, виджеты/компоненты.

Single SPA — это способ структурирования маршрутов для микрофронтендов.
Webpack Module Federation - это метод повышения производительности для микрофронтендов.

Параметры выбора между Single SPA и Webpack Module Federation
1. Поддерживаемые системы сборки
Single SPA:
ES5, ES6+, TypeScript, Webpack, SystemJS, Gulp, Grunt, Bower, ember-cli или любая другая доступная система сборки
Webpack Module Federation:
Webpack, Vite и немного других с особенностями использования

2. Поддерживаемые браузеры
Single SPA:
Chrome, Firefox, Safari, Edge и IE11 (с полифиллами).
Webpack Module Federation:


3. Поддержка отложенной загрузки
Single SPA:
На основе маршрута, с помощью "разделения кода" 
Webpack Module Federation:
возможно

4. Однократная загрузка используемых библиотек
Single SPA:
возможно с помощью UMD-модулей
Webpack Module Federation:
возможно

5. Поддержка микросервиса виджет/компонента
Single SPA:
да
Webpack Module Federation:
да
