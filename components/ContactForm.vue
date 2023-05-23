<template>
    <section :data-contact-form="store.form" class="tvl-contact-form-section">
        <div class="tvl-contact-form-wrapper">
            <div data-contact-form-row="background" class="tvl-contact-form-wrapper-rows"></div>
            <div data-contact-form-row="form" class="tvl-contact-form-wrapper-rows">
                <div class="tvl-contact-form-container">
                    <div class="tvl-contact-form-header">
                        <div class="tvl-contact-form-heading-container">
                            <h3 class="tvl-contact-form-heading">Get in touch</h3>
                        </div>
                        <div v-on:click="closeContactForm" class="tvl-contact-form-icon-container">
                            <span class="material-symbols-outlined">close</span>
                        </div>
                    </div>
                    <div v-if="!submitted" class="tvl-contact-form-container-wrapper">
                        <div class="tvl-contact-form">
                            <div class="tvl-contact-form-input-container">
                                <div class="tvl-contact-form-input-wrapper">
                                    <input v-on:change="validateName()" v-model="name" type="text" class="tvl-contact-form-input" placeholder="Full Name">
                                    <div v-if="input.name.error" class="tvl-contact-form-input-error-icon">
                                        <span class="material-symbols-outlined">error</span>
                                    </div>
                                </div>
                                <p :data-input-error="input.name.error" class="tvl-contact-form-input-error">{{input.name.message}}</p>
                            </div>
                            <div class="tvl-contact-form-input-container">
                                <div class="tvl-contact-form-input-wrapper">
                                    <input v-on:change="validateEmail()" v-model="email" type="email" class="tvl-contact-form-input" placeholder="Email Address">
                                    <div v-if="input.email.error" class="tvl-contact-form-input-error-icon">
                                        <span class="material-symbols-outlined">error</span>
                                    </div>
                                </div>
                                <p :data-input-error="input.email.error" class="tvl-contact-form-input-error">{{input.email.message}}</p>
                            </div>
                            <div class="tvl-contact-form-input-container">
                                <div class="tvl-contact-form-input-wrapper">
                                    <textarea v-on:change="validateMessage('message')" v-model="message" class="tvl-contact-form-textarea" cols="30" rows="10" placeholder="Message"></textarea>
                                    <div v-if="input.message.error" data-error-align="start" class="tvl-contact-form-input-error-icon">
                                        <span class="material-symbols-outlined">error</span>
                                    </div>
                                </div>
                                <p :data-input-error="input.message.error" class="tvl-contact-form-input-error">{{input.message.message}}</p>
                            </div>
                            <div class="tvl-contact-form-checkbox-container">
                                <div v-on:click="toggleCheckBox" :data-box-checked="checked" class="tvl-contact-form-checkbox"></div>
                                <p class="tvl-contact-form-checkbox-text">I hereby allow TheVerveLabs the permission to contact me.</p>
                            </div>
                        </div>
                        <div class="tvl-contact-form-button-container">
                            <p :data-input-error="input.main.error" class="tvl-contact-form-input-error">{{input.main.message}}</p>
                            <button v-on:click="submitForm" class="tvl-contact-form-button">
                                <span class="material-symbols-outlined">mail</span>
                                <span class="tvl-contact-form-button-text">&nbsp;&nbsp;Submit</span>
                            </button>
                        </div>
                        <p class="tvl-contact-form-divider">or</p>
                        <p class="tvl-contact-form-email">Email us at: hello@thevervelabs.com</p>
                    </div>
                    <div v-if="submitted" class="tvl-contact-form-message-container">
                        <div class="tvl-contact-form-message-wrapper">
                            <div class="tvl-contact-form-message">
                                <p class="tvl-contact-form-message-icon"><span class="material-symbols-outlined">verified_user</span></p>
                                <p class="tvl-contact-form-message-text">Your request is submitted, we will get back to you promptly</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
    import { useBaseAppStore } from '~/store' ;
    
    export default{
        name: 'ContactForm',
        data(){
            return {
                checked: true,
                name: '',
                email: '',
                message: '',
                submitted: false,
                input:{
                    name: {
                                message: 'error',
                                error: false,
                            },
                    email: {
                                message: 'error',
                                error: false,
                            },
                    message: {
                                message: 'error',
                                error: false,
                            },
                    main: {
                                message: 'error',
                                error: false
                            }
                }
            }
        },
        methods:{

            validateName: function(){

                let regex = new RegExp("^([a-zA-Z]|[a-zA-Z\']|[a-zA-Z\-]|[a-zA-Z ])+$"),
                    test = false, message = '' ;

                if(this.name){

                    test = (regex.test(this.name))? true : false ; 
                    message = (test)?'error':'Only alphabets are allowed';

                }else if(!this.name) {

                    message = 'Please fill this field' ;
                    test = false ;
                    
                }

                this.input.name.message = message ;
                this.input.name.error = !test ;

            },

            validateEmail: function(){

                let regex = new RegExp("^([a-zA-Z0-9]\\w|#|\\+|\\.|-|_|%|&|'[a-zA-Z0-9]|[a-zA-Z0-9])+@([a-zA-Z0-9]\\w|-[a-zA-Z0-9]|[a-zA-Z0-9])+(\\.[a-zA-Z0-9]+)+$"),
                    test = false, message = '' ;

                    if(this.email){

                        test = (regex.test(this.email))? true : false ;
                        message = (test)? 'error':'Please enter a valid email' ;

                    }else {

                        test = false ;
                        message = 'Please fill this field' ;
                    }

                    this.input.email.error = !test ;
                    this.input.email.message = message ;
                    
            },

            validateMessage: function(){

                    let regex = new RegExp("[{}<>=*#{}`]+"),
                        test = false, message = '' ;

                        if(this.message){

                            test = (!regex.test(this.message))? true : false ;
                            message = (test)? 'error':'Special characters not allowed (<>=*#%{}_`)' ;

                        }else {

                            test = false ;
                            message = 'Please fill this field' ;
                        }

                        this.input.message.error = !test ;
                        this.input.message.message = message ;
            },

            displayError(res){

                if(res.key !== ''){
                    this.input[res.key].message = res.message ;
                    this.input[res.key].error = true ;
                }else {
                    this.input.main.message = 'Something went wrong please try again leter' ;
                    this.input.main.error = true ;
                }
                
            },

            toggleCheckBox: function(){
                this.checked = !this.checked ;
            },

            resetContactForm: function(){

                this.submitted = false,
                
                this.name = '' ;
                this.input.name.message = 'error' ;
                this.input.name.error = false ;

                this.email = '' ;
                this.input.email.message = 'error' ;
                this.input.email.error = false ;

                this.message = '' ;
                this.input.message.message = 'error' ;
                this.input.message.error = false ;

                this.input.main.message = 'error' ;
                this.input.main.error = false ;

            },

            openContactForm: function(){

                this.store.$patch({form:'open',taps:0}) ;
            },

            closeContactForm: function(){

                this.store.$patch({form:'closed',taps: 0}) ;

                this.resetContactForm() ;
            },

            submitForm: async function(){

                let data = {
                                name: this.name,
                                email: this.email,
                                message: this.message
                            } ;

                let promise = await fetch('{api_url}', {
                                        method: 'post',
                                        mode: 'cors',
                                        body:JSON.stringify(data),
                                        headers:{
                                            'Content-Type': 'application/json'
                                        }
                                    })

                let response = await promise.json() ;
                    this.responseHandler(response.data) ;
            },

            responseHandler: function(res){

                switch(res.status){

                    case true:  this.submitted = true ;
                                break ;

                    case false: this.displayError(res) ;
                                break ;
                }
            }
        },
        setup(){
            return {
                store: useBaseAppStore()
            }
        }
    }
</script>

<style lang="scss">
    .tvl-contact-form-section{
        width: 100% ;
        height: 100vh ;
        position: fixed ;
        top: 0px ;
        left: 0px ;
        z-index: 150;
        overflow: hidden;

        &[data-contact-form='closed']{
            display: none;
        }

        &[data-contact-form='open']{
            display: block;
        }
    }
    .tvl-contact-form-wrapper{
        width: 100% ;
        height: 100% ;
        display: grid ;
        grid-template-columns: 1fr ;
        grid-template-rows: 1fr;
    }
    .tvl-contact-form-wrapper-rows{
        grid-column: 1/2 ;
        grid-row: 1/2 ;

        &[data-contact-form-row="background"]{
            scale: 1.2 ;
            background-color: rgba(0, 0, 0, 0.1);
            backdrop-filter: blur(10px);
        }

        &[data-contact-form-row="form"]{
            display: flex ;
            flex-direction: column;
            justify-content: center;
            z-index: 2;
        }
    }
    .tvl-contact-form-container{
        width: 85% ;
        min-width: 310px ;
        max-width: 520px ;
        padding: 16px 0px ;
        align-self: center;
        display: flex ;
        flex-direction: column;
        border-radius: 16px ;
        background-color: black;
        //background-image: url('@/assets/images/form/hand-left.png'), url('@/assets/images/form/hand-right.png') ;
        // background-position: left top, right bottom;
        // background-size: 45% auto , 45% auto ;
        // background-repeat: no-repeat, no-repeat;
    }
    .tvl-contact-form-container-wrapper{
        width: 100% ;
        display: flex ;
        flex-direction: column;
    }
    .tvl-contact-form-header{
        width: 90% ;
        align-self: center;
        display: flex ;
        flex-direction: row;
        margin-bottom: 24px ;
    }
    .tvl-contact-form-heading-container{
        flex: 1 ;
        height: auto ;
        display: flex ;
        align-self: center;
        transform: translateX(30px);
    }
    .tvl-contact-form-heading{
        width: 100% ;
        font-size: 20px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        color: white ;
        text-align: center;
    }
    .tvl-contact-form-icon-container{
        width: 30px ;
        height: 30px ;
        display: flex ;
        flex-direction: column;
        justify-content: center;
        align-self: center;
        cursor: pointer;
        position: relative;
        z-index: 1;

        span{
            color: white ;
            font-size: 21px ;
            align-self: center;
        }
    }
    .tvl-contact-form{
        width: 90% ;
        max-width: 430px;
        display: flex ;
        flex-direction: column;
        align-self: center;
    }
    .tvl-contact-form-input-container{
        width: 90% ;
        align-self: center;
        margin-bottom: 4px ;
    }
    .tvl-contact-form-input-wrapper{
        width: 100% ;
        height: auto ;
        display: flex ;
        flex-direction: row;
        background-color: rgba(255, 255, 255, 0.85);
        border-radius: 4px ;
        overflow: hidden;
    }
    .tvl-contact-form-input{
        flex: 1 ;
        height: 40px ;
        padding: 8px 12px ;
        text-align: left;
        font-size: 14px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        box-sizing: border-box;
        background-color: transparent;
        border: none ;

        &:focus{
            outline: none ;
        }
    }
    .tvl-contact-form-input-error-icon{
        width: 32px ;
        height: 32px ;
        align-self: center;
        display: flex ;
        flex-direction: row;
        justify-content: center;

        &[data-error-align="start"]{
            align-self: flex-start;
        }

        .material-symbols-outlined{
            font-variation-settings: 'FILL' 1;
        }

        span{
            color: red ;
            align-self: center;
        }
    }
    .tvl-contact-form-textarea{
        width: 100% ;
        height: 100px ;
        font-size: 14px ;
        font-weight: 400;
        font-family: var(--font-family);
        resize: none;
        padding: 8px 12px ;
        border: none ;
        box-sizing: border-box;
        background-color: transparent;

        &:focus{
            outline: none ;
        }
    }
    .tvl-contact-form-input-error{
        width: 100% ;
        font-size: 12px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: left;
        align-self: center;
        padding: 2px 4px ;
        box-sizing: border-box;
        color: white ;
        opacity: 0 ;

        &[data-input-error=false]{
            opacity: 0;
        }

        &[data-input-error=true]{
            opacity: 1;
        }
    }
    .tvl-contact-form-button-container{
        width: 90% ;
        max-width: 430px;
        display: flex ;
        flex-direction: column;
        align-self: center;
        margin: 16px 0px ;
    }
    .tvl-contact-form-checkbox-container{
        width: 90% ;
        align-self: center;
        display: flex ;
        flex-direction: row;
        margin-bottom: 16px ;
    }
    .tvl-contact-form-checkbox{
        width: 15px ;
        height: 15px ;
        display: flex ;
        flex-direction: row;
        justify-content: center;    
        border-radius: 4px ;
        align-self: flex-start;
        cursor: pointer;
        background-image: url('@/assets/images/form/check.png');
        background-position: center;
        background-repeat: no-repeat;
        background-size: 75% auto;
        transition: 0.15s all ease-in-out;

        &[data-box-checked=false]{
            background-color: white;
        }   

        &[data-box-checked=true]{
            background-color: #027900;
        }
    }
    .tvl-contact-form-checkbox-text{
        flex: 1;
        font-size: 11px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        text-align: left;
        padding-left: 8px ;
        box-sizing: border-box;
        color: white ;
        align-self: flex-start;
        line-height: 1.5;
    }
    .tvl-contact-form-button{
        width: 90% ;
        padding: 12px 0px ;
        overflow: hidden;
        border-radius: 8px ;
        border: none;
        align-self: center;
        position: relative;
        background-color: transparent;
        z-index: 1;
        cursor: pointer;
        transition: 0.15s all ease-in-out;
        background-color: white ;

        &:hover{
            background-color:rgba(215, 215, 215, 1);
            box-shadow: 0px 0px 8px -1px rgba(225, 225, 225, 0.3);
        }

        &:active{
            background-color: rgba(165, 165, 165, 1);
            box-shadow: 0px 0px 8px -1px rgba(225, 225, 225, 0.3);
        }

        // &::after{
        //     content: "";
        //     width: 100% ;
        //     height: 100% ;
        //     position: absolute;
        //     top: 0px ;
        //     left: 0px ;
        //     background-image: url('@/assets/images/form/button.jpg');
        //     background-position: center;
        //     background-size: cover;
        //     background-repeat: no-repeat;
        //     z-index: -1;
        //     transition: 0.15s all ease-in-out;
        // }

        .tvl-contact-form-button-text{
            font-size: 17px ;
            font-weight: 500 ;
            font-family: var(--font-family);
            line-height: 1;
            transform: translateY(0px);
        }

        .material-symbols-outlined{
            font-variation-settings: 'FILL' 1;
        }

        span{
            color: black ;
            display: inline-block;
            vertical-align: middle;
        }
    }
    .tvl-contact-form-divider{
        width: 100% ;
        font-size: 14px ;
        font-weight: 400 ;
        font-family: var(--font-family);
        color: white ;
        padding: 8px 0px ;
        text-align: center;
    }
    .tvl-contact-form-email{
        font-size: 14px ;
        font-weight: 300 ;
        font-family: var(--font-family);
        text-align: center;
        color: white ;
        padding-bottom: 8px ;
    }

    .tvl-contact-form-message-container{
        width: 90% ;
        align-self: center;
        height: auto;
        display: flex ;
        flex-direction: column;
    }
    .tvl-contact-form-message-wrapper{
        width: 85% ;
        height: 350px  ;
        display: flex ;
        flex-direction: row;
        align-self: center;
    }
    .tvl-contact-form-message{
        width: 100% ;
        height: fit-content ;
        align-self: center;
        padding: 16px ;
        box-sizing: border-box;
        border-radius: 16px ;
        background-color: rgba(255, 255, 255, 0.85);
    }
    .tvl-contact-form-message-icon{
        width: 100% ;
        margin-bottom: 8px ;
        text-align: center;

        .material-symbols-outlined{
            font-size: 48px ;
            color: #027900 ;
            font-variation-settings: 'FILL' 1;
        }
    }
    .tvl-contact-form-message-text{
        font-size: 15px ;
        font-weight: 400;
        font-family: var(--font-family);
        text-align: center;
        line-height: 1.5;
    }

    @media screen and (min-width: 540px) {
        .tvl-contact-form-heading{
            font-size: 30px ;
        }
        .tvl-contact-form-checkbox-text{
            font-size: 12px ;
        }
    }
</style>
