const isUserLogged = () => {
    if (window.localStorage.getItem('user')) {
        return true
    } else {
        return false
    }
}

export default isUserLogged
