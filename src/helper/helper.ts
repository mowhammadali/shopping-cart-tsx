export const sliceTitle = (title: string): string => {
    const words = title.split(' ');
    return `${words[0]} ${words[1]}`
}