export function generateRandomImage():string {
    const url = "https://www.superherodb.com/pictures2/portraits/10/100/";

    const randomNum = Math.floor(Math.random() * 100);
    return `${url}${randomNum}.jpg`
}