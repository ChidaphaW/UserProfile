export class ApiResponseModel <T> {
    status: string="";
    message!: null;
    data!: T;   
}