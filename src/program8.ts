function sleep(hours: number): Promise<unknown> {
    const milliseconds = hours * 3600 * 1000
    return new Promise<void>((resolve)=> {
        setTimeout(() => {
            resolve();
        }, milliseconds)
    })
}
