
interface IData {
    name: string;
    email: string;
}

interface IProps<T> {
    url: string;
    ref: RefObject<T>;
    initialData: IData;
}
interface ILoading {
    status: 'Loading';
}
interface IDatos<T> {
    status: 'Loaded';
    datos: T[];
}
interface IError {
    status: 'Error';
    error: Error;
}
type TReturnUseFetch<T> =
    | ILoading
    | IDatos<T>
    | IError;