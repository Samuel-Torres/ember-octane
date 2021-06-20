import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from "@glimmer/tracking";

export default class LoginFormComponent extends Component {
    @tracked
    userId = null;

    get isDisabled(){
        return !this.userId;
    }

    loginWithUserId(id){
        console.log(id)
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
        this.loginWithUserId(userId);
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
