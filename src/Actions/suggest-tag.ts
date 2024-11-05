"use server"
export const SuggestTags = async (value: string) => {
    const response = await fetch(`https://suggestqueries.google.com/complete/search?output=chrome&q=${value}`);
    const data = await response.json();
    return data[1]
}