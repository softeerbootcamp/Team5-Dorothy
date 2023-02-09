import { stateModal } from '../components/modal';
// 로그아웃
export const Logout = () => {
    alert('로그아웃');
    UserService.logout();
};

// 로그인
export const GetUser = async (id, password) => {
    try {
        const response = await UserService.getUser(id, password);
        return Promise.resolve(response.data);
    } catch (error) {
        stateModal(response.code, response.message);
        return Promise.reject(response.message, '로그인 실패');
    }
};

// 회원가입
export const PostUser = async (
    memberId,
    password,
    passwordCheck,
    name,
    email,
) => {
    try {
        const responese = await UserService.postUser(
            memberId,
            password,
            passwordCheck,
            name,
            email,
        );
        stateModal(response.code, response.message);
        return Promise.resolve(responese.data);
    } catch (error) {
        stateModal(response.code, response.message);
        return Promise.reject(response.message, '회원가입 실패');
    }
};
