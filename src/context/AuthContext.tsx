import { createContext, ReactNode, useState } from "react";
import { getAuth, User } from "firebase/auth";
import { app } from "firebaseApp";

interface AuthProps {
    children: ReactNode;
}

const AuthContext = createContext({
    user: null as User | null,
});

export const AuthContextProvider = ({ children }: AuthProps) => {
    const auth = getAuth(app);
    const [currentUser, setCurrentUser] = useState<User | null>(null);
}