export const toMinutes = () => {
    return (seconds) => { return new Date(1970, 0, 1).setSeconds(seconds) }
}