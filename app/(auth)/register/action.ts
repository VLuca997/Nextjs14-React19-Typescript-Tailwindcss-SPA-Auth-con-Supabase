"use server";
import {createClient} from '@/utils/supabase/server'//instanziamento client

export type FormState = {
    message:string
    error?: string
}
export const registerAction = async( prevState:FormState, formData:FormData ) => {

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassoword = formData.get("confirm-password") as string;


    
    if(!password || password !== confirmPassoword){
        
        return{
            message:"",
            error:"Passowrd errata"
        }
        
    }
    
    const supabaseClient = createClient();//instanziamento e  create Client supabase
    const {  error } = await supabaseClient.auth.signUp({//presa da auth su supabase e rimodellata .
        email,
        password,
      })

    if(error){
        return{
            message:"",
            error: error.message
        }
    }

        return{message:"Success, check ur email"}// se ritorna questo messaggio, conttrolla in authentication su supabase per vedere l'utente creato!

    
}