export interface IStartShip {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    cost_in_credits?: string;
    avatar: string;
}
interface IStartShips {
    data: IStartShip[];
}
interface ServiceInit {
    status: 'init';
}
interface ServiceLoading {
    status: 'loading';
}
interface ServiceLoaded<T> {
    status: 'loaded';
    payload: T;
}
interface ServiceError {
    status: 'error';
    error: Error;
}
type Service<T> =
    | ServiceInit
    | ServiceLoading
    | ServiceLoaded<T>
    | ServiceError;

interface IProps {
    url?: string | 'https://reqres.in/api/users?page=2';
}