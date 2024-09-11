export function UNZIP_URL(path = "") {
    return `${process.env.UNZIP_URL}${path}`;
}

export async function UNZIP_API(path) {
    const requestUrl = UNZIP_URL(path);
    const response = await fetch(requestUrl);
    try {
        const data = await response.json();
        return data;
    } catch (error) {
        return null;
    }
}