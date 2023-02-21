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
        return this.id;
    }
    set trackID(value) {
        console.log(value);
        this.id = value;
    }
}
