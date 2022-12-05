import myAxios from ".";


// 회원가입 body
interface SignUpAPIBody {
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    birthday: string;
}

// 회원 가입 api
export const signupAPI = (body: SignUpAPIBody) => {
    return myAxios.post('/api/auth/signup', body)
}