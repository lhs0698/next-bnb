//* users.json에 저장된 유저 타입

export type StoredUserType = {
    id: number;
    email: string,
    password: string;
    firstname: string;
    lastname: string;
    birthday: string;
    profileImage: string;
};

//* 이름을 UserType이 아닌 StoredUserType이라고 한 이유는 클라이언트에서 사용하는 user 데이터에는 password를 제공하지 않을 예정이기 떄문이다. 
//* 또한 profileImage는 회원가입 할 때 기본값으로 넣어줄 예정이다.
