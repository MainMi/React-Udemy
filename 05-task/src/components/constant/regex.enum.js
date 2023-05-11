export const regex = {
    REGEX_GROUP: /[а-яА-я,І,0-9][а-яА-я,І,0-9]-[а-яА-я,І,0-9][а-яА-я,І,0-9]?[а-яА-я,І,0-9]?[а-яА-я,І,0-9]/,
    REGEX_EMAIL: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
    REGEX_PASSWORD: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    REGEX_LOWER_CHAR: /^(?=.*[a-z])/,
    REGEX_UPPER_CHAR: /^(?=.*[A-Z])/,
    REGEX_NUMBER_CHAR: /^(?=.*[0-9])/,
    REGEX_SPECIAL_CHAR: /^(?=.*[@$!%*#?&])/,
    REGEX_LENGTH_CHAR: /^(?=.{8,})/,
};
