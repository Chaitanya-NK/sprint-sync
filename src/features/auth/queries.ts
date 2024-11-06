import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";
import { AUTH_COOKIE } from "./constants";
import { createSessionClient } from "@/lib/appwrite";

export const getCurrent = async () => {
    try {
        const { account } = await createSessionClient()
        const user = await account.get();
        return user;
    } catch (error) {
        return null;
    }
};
