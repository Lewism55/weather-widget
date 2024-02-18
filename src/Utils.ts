export const convertDateTime = (dt: number) => {
    return new Date(dt * 1000).toLocaleTimeString('uk', { hour: '2-digit', minute: '2-digit' });
}