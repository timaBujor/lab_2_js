/**
 * Получает случайную активность с API.
 * @returns {Promise<string>} Текст случайной активности.
 * @throws {Error} Если запрос завершился неудачно.
 */
export async function getRandomActivity() {
    try {
        const response = await fetch('https://www.boredapi.com/api/activity/');
        if (!response.ok) {
            throw new Error(`Could not fetch activity, status: ${response.status}`);
        }
        const data = await response.json();
        return data.activity;
    } catch (error) {
        console.error(error);
        throw error;
    }
}
