export const isEmpty = (value: string) => {
    return value === "";
};

export const isPatternUserId = (value: string) => {
    const userIdPattern = /^[A-Za-z0-9]{6,}$/;
    return userIdPattern.test(value);
};

export const isPatternPassword = (value: string) => {
    const passwordPattern =
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{10,}$/;
    return passwordPattern.test(value);
};
