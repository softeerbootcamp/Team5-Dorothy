export const userName = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user.name;
};

export const userRole = () => {
    const user = JSON.parse(sessionStorage.getItem('user'));
    return user.role;
};
