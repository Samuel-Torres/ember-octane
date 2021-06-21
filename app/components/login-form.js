import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";
import { inject as service } from '@ember/service';
import AuthService from 'shlack/services/auth';

export default class LoginFormComponent extends Component {
    @tracked
    userId = null;

    /**
     * @type {AuthService}
     */
    @service auth;

    get isDisabled(){
        return !this.userId;
    }

    /**
     * 
     * @params {Event & { target: HTMLFormElement}}
     */
    @action
    onLoginFormSubmit(event){
        event.preventDefault();
        const userId = event.target.querySelector('select').value;
        // this is now reffering to your form. 
        this.auth.logInWithUserId(userId);
    }
    /**
     * 
     * @param {Event & { target: HTMLSelectElement }} event 
     */
    @action
    onSelectChange(event){
        // mutating state:
        this.userId = event.target.value
    }
}
