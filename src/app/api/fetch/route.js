import { ConnectDB } from "@/app/lib/mongoose"
import { Link } from "@/app/models/Links";

export async function POST(req) {
    try {

        await ConnectDB()
        const { alias } = await req.json();
        console.log(alias);
        if (alias) {
            const data = await Link.findOne({ alias: alias }, 'url')
            if(!data){
                return Response.json({ error: 'not saved' })
            }
            return Response.json({ data })
        }
    } catch (e) {
        console.log('error while execution ;' + e);
        return Response.json({ error: 'something went wrong while executing' })
    }
}