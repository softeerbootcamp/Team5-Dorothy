import { navigateTo } from '../router';

export const userName = () => {
    if (sessionStorage.getItem('user') == null) {
        navigateTo('/');
        return;
    }
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user.name;
};

export const userRole = () => {
    if (sessionStorage.getItem('user') == null) {
        navigateTo('/');
        return;
    }
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user.role;
};
