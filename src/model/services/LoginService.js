import { observable, action } from 'mobx';

class LoginService {

    @observable employees = [];
    @observable email = "some@email.com";
    @observable password = "Password";

    @action addEmployee(employee) {
        this.employees.push({
            ...employee
        })
    }

    @action removeEmployees(employee) {
        this.employees.remove(employee);
    }

    @action clearAll() {
        this.employees.clear();
    }

    getEmployees() {
        return this.employees;
    }
}

export default LoginService;