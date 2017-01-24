export function formatDate(date) {
    const diff = new Date() - date;
    const minutes = diff / (60 * 1000);
    const days = Math.floor(diff / (24 * 60 * 60 * 1000));

    if (minutes <= 1) {
        return 'несколько секунд назад';
    }

    if (minutes >= 1 && minutes < 2) {
        return 'минуту назад';
    }

    if (minutes >= 60 && minutes < (24 * 60)) {
        return 'несколько часов назад';
    }

    if (days >= 1 && days < 31) {
        return `${days} дней назад`;
    }

    if (days >= 31) {
        return 'месяц назад';
    }

    return date.toString();
}
