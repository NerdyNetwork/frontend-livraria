import {
	createContext,
	ReactNode,
	useContext,
	useEffect,
	useState,
} from "react";

type UserSignedDataProps = {
	uid: string;
	email?: string;
	username?: string;
};

type UserDataProps = {
	email: string;
	password: string;
	username: string;
};

type AuthContextData = {
	isSigned: boolean;
	userData: UserSignedDataProps | null;
	isLoading: boolean;
	isLoadingAuth: boolean;
	createUserWithEmailAndPassword: (JSON: UserDataProps) => any;
	signIn: (email: string, password: string) => any;
	signOut: () => any;
};

type AuthContextProviderProps = {
	children: ReactNode;
};

export const AuthContext = createContext<AuthContextData | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderProps) => {
	const [userData, setUserData] = useState<UserSignedDataProps | null>(null);
	const [isLoadingAuth, setIsLoadingAuth] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		loadStorage();

		function loadStorage() {
			const storageUserData = localStorage.getItem("UserData");

			if (storageUserData) setUserData(JSON.parse(storageUserData));

			setIsLoading(false);
		}
	}, []);

	const saveUserDataInLocalStorage = (userData: UserSignedDataProps) => {
		localStorage.setItem("UserData", JSON.stringify(userData));
	};

  // general
	const saveUserData = async (userData: UserSignedDataProps) => {
		////////
	};

	const createUserWithEmailAndPassword = async ({
		email,
		password,
		username,
	}: UserDataProps) => {
		setIsLoadingAuth(true);

		/////////////////

		setIsLoadingAuth(false);
	};

	const signIn = async (email: string, password: string) => {
    setIsLoadingAuth(true);

		/////////

    setIsLoadingAuth(false);
	};

	const signOut = async () => {
		try {
			///////////
		} catch (error) {
			return { error };
		}
	};

	return (
		<AuthContext.Provider
			value={{
				isSigned: Boolean(userData),
				userData,
				isLoading,
				isLoadingAuth,
				createUserWithEmailAndPassword,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => useContext(AuthContext);
