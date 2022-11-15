import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../services/firebase";

export default async function upload(e){
    e.preventDefault();

    const file = e.target[0]?.files[0];
    
    if(!file) return;

    const storageRef = ref(storage,`images/${file.name}`);
    await uploadBytesResumable(storageRef, file);
    return await getDownloadURL(storageRef).catch((error)=>console.log(error))

}

