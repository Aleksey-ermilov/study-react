module.exports = (success, message, user, token) => {
    if (user === undefined && token === undefined){
        return {success, message}
    }

    if (token === undefined){
        return {success, message, user}
    }

    return {success, message, user, token};
}
