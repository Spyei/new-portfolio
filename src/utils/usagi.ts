function getRandomInt(max: number) {
    return Math.floor(Math.random() * (max + 1));
}

export const getRandomUsagiAudio = () => {
    return `/usagi/audios/${getRandomInt(6)}.mp3`;
};

export const getRandomUsagiImage = () => {
    return `/usagi/photos/${getRandomInt(5)}.webp`;
};