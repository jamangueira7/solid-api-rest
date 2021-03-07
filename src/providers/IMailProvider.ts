
interface IAdrees {
    email: string;
    name: string;
}

export interface IMessage {
    to: IAdrees;
    from: IAdrees;
    subject: string;
    body: string;
}

export interface IMailProvider {
    sendMail(message: IMessage): Promise<void>;
}
