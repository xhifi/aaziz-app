const core = {
    checkFluid : (arg) => {
        if (arg) return "container-fluid"
        return "container"
    },
    checkLink : (url) => (url.indexOf("http") === 0 ? true : false)
}

export default core;