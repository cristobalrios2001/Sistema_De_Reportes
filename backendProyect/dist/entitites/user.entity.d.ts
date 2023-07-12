export declare class User {
    correo: string;
    password: string;
    validatePassword(password: string): boolean;
    getInfoToken(): {
        correo: string;
    };
}
