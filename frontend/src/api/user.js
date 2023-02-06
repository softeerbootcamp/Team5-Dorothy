// 로그아웃
export const Logout = () => {
    alert('세션 만료, 다시 로그인해주세요.');
    UserService.logout();
};

// 로그인
export const GetUser = async (id, password) => {
    try {
        const response = await UserService.getUser(id, password);

        return Promise.resolve(response.data);
    } catch (error) {
        return Promise.reject(error.response.data, '로그인 실패');
    }
};
