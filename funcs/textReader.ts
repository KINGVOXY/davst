export async function readText(path: string) {
    const res = await Deno.readTextFile(new URL(path, import.meta.url));
    return res;
}
