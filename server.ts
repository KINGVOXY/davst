import {
    System,
    Config,
    ConfigReader,
    SystemRequest,
    SystemResponse
} from "./deps.ts";
import { TemplateTag } from "./funcs/TemplateTag.ts"


// ルーティング
// routing
const authdata = (await ConfigReader.read("./config/auth.env"))
const head = await TemplateTag.getHead();
const header = await TemplateTag.getHeader();
const footer = await TemplateTag.getFooter();

System.createRoute(`./views/home/index.html`).URL("/")
    .GET(async (req: SystemRequest, res: SystemResponse) => {
        res.preset({ head: head, header:header, footer: footer })
        await res.setFile(`./views/home/index.html`);
    });

const route_names = [
    "/result/ens_laion",
    "/result/laion",
    "/result/exp_photo",
];
for(const route_name of route_names) {
    System.createRoute(`./views${route_name}.html`).URL(route_name).AUTH(authdata.NAME, authdata.PASS)
        .GET(async (req: SystemRequest, res: SystemResponse) => {
            res.preset({ head: head, header: header, footer: footer })
            await res.setFile(`./views${route_name}.html`);
        });
}

// 素材の読み込み
// assets importing
System.createRoutes("./views/assets/*");

System.listen("./config/.env", (conf: Config)=>{
    console.log(`The server running on http://${conf.SERVER.HOSTNAME}:${conf.SERVER.PORT}`);
});
