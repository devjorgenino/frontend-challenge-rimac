export interface UserData {
  birthDay: string | null;
  lastName: string | null;
  name: string | null;
  documentNumber: string | null;
  celular: string | null;
}

export interface UserContextProps {
  getUser: (documentNumber: string, celular: string) => Promise<any>;
  userData: UserData | undefined;
}
