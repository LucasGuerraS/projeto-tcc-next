import { UserResponse } from "@/app/api/validateSession/route";
import { getSession } from "./session";
import { getUserById } from "@/_clients/backend";

export const validateSession = async () => {
    const session = await getSession();
    if (!session) {
        return false;
    }
    const user = (await getUserById(session.value)).data as UserResponse;
    if (!user) {
        return false;
    }
    return user;
}