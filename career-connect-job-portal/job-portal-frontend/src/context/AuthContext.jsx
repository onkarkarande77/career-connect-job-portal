import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);

    useEffect(() => {

        try {

            const storedUser = localStorage.getItem("user");

            if (storedUser && storedUser !== "undefined") {
                setUser(JSON.parse(storedUser));
            }

        } catch (error) {

            localStorage.removeItem("user");

        }

    }, []);

   const login = (userData, token) => {

    localStorage.setItem("token", token);

    localStorage.setItem(
        "user",
        JSON.stringify(userData)
    );

    localStorage.setItem(
        "userId",
        userData.id
    );

    localStorage.setItem(
        "role",
        userData.role
    );

    setUser(userData);

};

    

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
        localStorage.removeItem("role");
       // localStorage.clear();

        setUser(null);
    };

    return (
        <AuthContext.Provider
            value={{
                user,
                login,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>
    );

};

export const useAuth = () => useContext(AuthContext);