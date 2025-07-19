import { initializeApp, cert, getApps } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "./kanji-no-yarikata-firebase-adminsdk-fbsvc-9ce139fa7a.json";

if (!getApps().length) {
    initializeApp({
        credential: cert(serviceAccount)
    });
}

export const db = getFirestore();