import { DataListPropsType } from '../../components/dataList/DataList';

export const CodeForStorages = {
  storage: `// Сохранение данных в LocalStorage  
localStorage.setItem('username', 'JohnDoe');  

// Получение данных из LocalStorage  
const username = localStorage.getItem('username');  
console.log(username); // Вывод: JohnDoe  

// Удаление конкретного элемента из LocalStorage  
localStorage.removeItem('username');  

// Очистка всего LocalStorage  
localStorage.clear();  

// Проверка наличия данных  
if (localStorage.getItem('username')) {  
    console.log('Имя пользователя найдено в LocalStorage');  
} else {  
    console.log('Имя пользователя не найдено');  
}  `,
  sessionStorage: `// Сохранение данных в SessionStorage  
sessionStorage.setItem('sessionId', 'abc123');  

// Получение данных из SessionStorage  
const sessionId = sessionStorage.getItem('sessionId');  
console.log(sessionId); // Вывод: abc123  

// Удаление конкретного элемента из SessionStorage  
sessionStorage.removeItem('sessionId');  

// Очистка всего SessionStorage  
sessionStorage.clear();  

// Проверка наличия данных  
if (sessionStorage.getItem('sessionId')) {  
    console.log('Session ID найден в SessionStorage');  
} else {  
    console.log('Session ID не найден');  
}`,
};

export const DataListCoockies: DataListPropsType = {
  header: `Зачем нужно хранилище в виде Cookies?`,
  listData: [
    'Сохранение состояния: Cookies позволяют хранить небольшие объемы данных, такие как пользовательские настройки, предпочтения, идентификаторы сессий и другие данные, которые нужно сохранить между различными запросами или сеансами пользователей.',
    'Аутентификация и авторизация: Cookies могут использоваться для хранения токенов аутентификации, позволяя пользователю оставаться аутентифицированным в приложении даже после перезапуска браузера.',
    'Персонализация и отслеживание: Cookies могут использоваться для анализа поведения пользователя на сайте и предоставления персонализированного опыта. Например, рекомендации товаров, основанные на предыдущих покупках.',
  ],
};

export const DataListCoockiesVsLS: DataListPropsType = {
  header: `Отличие от LocalStorage`,
  listData: [
    'Емкость данных: Cookies могут содержать до 4KB данных, в то время как Local Storage позволяет хранить около 5MB данных.',
    'Срок хранения: Cookies имеют срок хранения, который можно указать, в то время как данные в Local Storage хранятся неограниченное время, пока их явно не удалить.',
    '!!!Передача данных!!!: Cookies автоматически включаются в заголовки каждого HTTP-запроса к определенному домену, что делает их более подходящими для некоторых сценариев, таких как авторизация. Local Storage данные не автоматически передаются с каждым запросом.',
  ],
};
