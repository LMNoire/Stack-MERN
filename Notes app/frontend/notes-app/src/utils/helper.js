export const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^z@]+\.[^\s@]+$/;
    return regex.test(email);
};