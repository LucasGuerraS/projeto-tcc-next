export const calculateFirst = (progress: number) => {
    if (progress > 3) return 3;
    return progress;
}

export const calculateSecond = (progress: number) => {
    if (progress > 6) return 3;
    if (progress > 3) return progress - 3;
    return 0;
}