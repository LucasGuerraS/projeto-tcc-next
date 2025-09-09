import { UserResponse } from "@/app/api/validateSession/route";
import { getSession } from "./session";
import { getUserById } from "@/_clients/backend";
import { redirect, RedirectType } from "next/navigation";

export const validateSession = async () => {
    const session = await getSession();
    if (!session) {
        redirect('/', RedirectType.replace);
    }
    const user = (await getUserById(session.value)).data as UserResponse;
    if (!user) {
        redirect('/', RedirectType.replace);
    }
    return user;
}