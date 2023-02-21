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
    if (sessionStorage.getItem('user') === null) {
        // navigateTo('/');
        return;
    }
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user.role;
};

export const userIdx = () => {
    if (sessionStorage.getItem('user') === null) {
        navigateTo('/');
        return;
    }
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user.idx;
};

export class userTrackID {
    constructor(id) {
        this.id = id;
    }
    get trackID() {
        const id = sessionStorage.getItem('trackId', value);
        return id;
    }
    set trackID(value) {
        sessionStorage.setItem('trackId', value);
        this.id = value;
    }
}
