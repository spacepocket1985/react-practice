export const codeForProjectStructure = {
  project: `my-react-app/  
├── index.html               # Главный HTML файл, в который будет внедрено React приложение.  
├── package.json             # Конфигурационный файл с зависимостями и метаданными проекта.  
├── package-lock.json        # Автоматически сгенерированный файл, фиксирующий версии зависимостей.  
├── README.md                # Документация проекта, объясняющая, как его установить и запустить.  
├── .gitignore               # Список файлов и директорий, которые должны игнорироваться Git.  
├── .env                     # Файл для хранения переменных окружения (например, API-ключи).  
├── node_modules/           # Директория для установленных npm-пакетов.  
├── tsconfig.json            # Конфигурационный файл TypeScript с параметрами компиляции.  
├── vite.config.ts           # Конфигурационный файл Vite с настройками сборки и плагинами.  
├── src/                     # Основная директория, содержащая исходный код приложения.  
│   ├── assets/              # Директория для статических ресурсов (изображения, шрифты и т.д.).  
│   ├── components/          # Переиспользуемые компоненты приложения.  
│   ├── pages/               # Страницы приложения (если используется роутинг).  
│   ├── hooks/               # Переиспользуемые пользовательские хуки.  
│   ├── context/             # Контексты для управления состоянием приложения.  
│   ├── styles/              # Глобальные стили или модули стилей.  
│   ├── App.tsx              # Корневой компонент приложения, куда включаются маршруты и глобальные элементы.  
│   ├── main.tsx             # Точка входа в приложение, где происходит рендеринг React в DOM.  
└── public/                  # Директория для статических файлов, доступных на сервере (например, favicon).`,
  packageJson: `{  
  "name": "my-react-app",              // Название вашего проекта.  
  "version": "1.0.0",                   // Версия вашего приложения.  
  "private": true,                      // Указывает, что проект является частным и не предназначен для публикации в npm.  
  "scripts": {                          // Скрипты для удобного запуска команд.  
    "dev": "vite",                      // Команда для запуска приложения в режиме разработки.  
    "build": "vite build",              // Команда для сборки приложения для продакшена.  
    "serve": "vite preview"             // Команда для предварительного просмотра сборки в локальном режиме.  
  },  
  "dependencies": {                     // Зависимости, необходимые для работы приложения.  
    "react": "^18.0.0",                 // Библиотека React.  
    "react-dom": "^18.0.0"              // Библиотека для работы с DOM в React.  
  },  
  "devDependencies": {                  // Зависимости, необходимые только для разработки.  
    "vite": "^4.0.0",                   // Инструмент сборки Vite.  
    "typescript": "^4.0.0",             // Типизация для JavaScript с помощью TypeScript.  
    "@types/react": "^18.0.0",          // Определения типов для React.  
    "@types/react-dom": "^18.0.0"       // Определения типов для React DOM.  
  },  
} `,
};
