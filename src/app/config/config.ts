// import { APPConstants } from '../../assets/configuration/app-constants';
import { environment } from './../../environments/environment';

const domain = window.location.href.split('#')[0].split('://')[0];
const host_domain = window.location.host;
export class Config {
    public static get BASE_POINT_API(): string { return environment.base_url+'api/v2/'; }
    public static get BASE_POINT_UPLOAD(): string { return environment.base_url+'api/upload/'; }
    public static API: any = {
        // MS Token Validate
        USER_LOGIN: Config.BASE_POINT_API + 'reporterLogin',
        GET_META_DATA: Config.BASE_POINT_API + 'getMetaData',
        REGISTER_EMPLOYEE: Config.BASE_POINT_API + 'registerEmployee',
        GET_SUBSCRIBERS: Config.BASE_POINT_API + 'getSubscribers',
        FETCH_DASHBOARD: Config.BASE_POINT_API + 'fetchDashboard',
        EMPLOYEES_DATA: Config.BASE_POINT_API + 'getEmployeesData',
        MANIPULATE_EMPLOYEE: Config.BASE_POINT_API + 'manipulateEmployee',
        EMPLOYEE_DATA: Config.BASE_POINT_API + 'getEmployeeData',
        GET_NEWS_LIST: Config.BASE_POINT_API + 'getNewsList',
        GET_ALL_EMPLOYEES: Config.BASE_POINT_API + 'getAllEmployees',
        MANIPULATE_NEWS: Config.BASE_POINT_API + 'manipulateNews',
        UPLOAD_FILES: Config.BASE_POINT_UPLOAD + 'uploadFiles',
        GET_NEWS_INFO: Config.BASE_POINT_API + 'getNewsInfo',

    }
}