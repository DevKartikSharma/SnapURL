import { ConnectDB } from "@/app/lib/mongoose"
import { Link } from "@/app/models/Links";


export async function POST(req) {
  try {

    await ConnectDB()
    const { url, alias } = await req.json();
    console.log(url);
    console.log(alias);


    if (url && alias) {
      const isPatent = await Link.findOne({alias:alias})
      if (isPatent){
        console.log('already taken');
        return Response.json({ error: 'taken' })
      }
      let newLink = await new Link({
        url: url,
        alias: alias
      })
      await newLink.save();
      console.log('saved successfully');
    } else {
      return Response.json({ error: 'something went wrong while saving' })
    }
    return Response.json({ message: 'Recieved succesfully' ,alias})
  } catch (e) {
    console.log('error while execution ;' + e);
    return Response.json({ error: 'something went wrong while executing' })
  }
}