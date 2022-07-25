export class TemplateTag {

    private static async readHtml(path: string): Promise<string> {
        const res = await Deno.readTextFile(new URL(path, import.meta.url));
        return res;
    }

    public static async getHead(): Promise<string> {
        return await TemplateTag.readHtml("../views/templates/head.html");
    }

    public static async getHeader(): Promise<string> {
        return await TemplateTag.readHtml("../views/templates/header.html");
    }

    public static async getFooter(): Promise<string> {
        return await TemplateTag.readHtml("../views/templates/footer.html");
    }

}
