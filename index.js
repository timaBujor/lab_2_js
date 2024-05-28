import { getRandomActivity } from './activity.js';

// Функция для обновления активности на странице
async function updateActivity() {
    try {
        const activity = await getRandomActivity();
        document.getElementById('activity').textContent = activity;
    } catch (error) {
        document.getElementById('activity').textContent = "К сожалению, произошла ошибка";
    }
}

// Инициализация обновления активности при загрузке страницы
updateActivity();

// Обновление активности каждую минуту
setInterval(updateActivity, 60000);