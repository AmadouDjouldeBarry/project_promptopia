import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

const GET = async(req)=>{

    try {
        connectToDB();
        const prompts = await Prompt.find({}).populate('creator')
        return new Response(JSON.stringify(prompts), {status: 200})
    } catch (error) {
        return new Response('Faild to fetch all prompts', {status: 200})
    }

}