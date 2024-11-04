"use server";

import { cookies } from "next/headers";
import { Account, Client } from "node-appwrite";
import { AUTH_COOKIE } from "./constants";

export const getCurrent = async () => {
    try {
        const client = new Client()
            .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT!)
            .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT!);

        const session = await cookies().get(AUTH_COOKIE);
        console.log("Session Cookie:", session);

        if (!session) return null;

        client.setSession(session.value)

        const account = new Account(client);
        const user = await account.get();
        console.log("User Account Data:", user);

        return user;
    } catch (error) {
        console.error("Error fetching user:", error);
        return null;
    }
};
