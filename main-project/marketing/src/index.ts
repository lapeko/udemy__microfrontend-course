const start = async () => {
    const {init} = await import("./marketing-bootstrap")

    if (process.env.NODE_ENV === "development") {
        const root = document.getElementById('root')
        root && init(root);
    }
}

start();
