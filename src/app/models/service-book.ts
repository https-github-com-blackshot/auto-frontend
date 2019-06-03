import {Users} from '../../../../../red-resume/frontend-red-resume/src/models/users';

export class ServiceBook {
    constructor(
        public id?: number,
        public code?: string,
        public name?: string,
        public userId?: number,
        public user?: Users
    ) {}


}
