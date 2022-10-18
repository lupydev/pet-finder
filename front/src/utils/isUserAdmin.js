const isUserAdmin = () => {

    const user = JSON.parse(window.localStorage.getItem('user'))

    if (user?.isAdmin) {
        return true
    } else {
        return false
    }
}

export default isUserAdmin
