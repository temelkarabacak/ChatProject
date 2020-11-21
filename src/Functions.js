export function resolveErrorCode(code) {
    switch (code) {
        case "auth/user-not-found":
            return "User not found"
        case "auth/wrong-password":
            return "Wrong password, please try again"
        case "auth/null-value":
            return "You can't login without login and password information.. Enter your login info!"
        default:
            break;
    }
}