<template>
    <Page>
        <ActionBar>
            <StackLayout orientation="horizontal"
                ios:horizontalAlignment="center"
                android:horizontalAlignment="center">
                <Label text="Petstacy"  class="action-label"></Label>
            </StackLayout>
        </ActionBar>
        <ScrollView [isScrollEnabled]="scrollEnabled" row="1">
            <FlexboxLayout class="page">
                <StackLayout class="form">
                    <Image col="1" row="0" horizontalAlignment="center" class="logo-img" src="~/assets/images/logo.png" />
                    <GridLayout rows="auto, auto, auto">
                        <StackLayout row="0" class="input-field">
                            <TextField class="input" hint="Username" :isEnabled="!processing"
                                keyboardType="username" autocorrect="false"
                                autocapitalizationType="none" v-model="user.username"
                                returnKeyType="next" @returnPress="focusPassword"></TextField>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <StackLayout row="1" class="input-field">
                            <TextField class="input" ref="password" :isEnabled="!processing"
                                hint="Password" secure="true" v-model="user.password"
                                :returnKeyType="'done'"></TextField>
                            <StackLayout class="hr-light"></StackLayout>
                        </StackLayout>

                        <ActivityIndicator color="#f9423a" rowSpan="3" :busy="processing"></ActivityIndicator>
                    </GridLayout>

                    <Button :text="'Log In'" :isEnabled="!processing" @tap="submit"
                        class="btn btn-primary btn-petstacy m-t-20"></Button>
                </StackLayout>
            </FlexboxLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Home from "./Home";
    import * as dialogs from "tns-core-modules/ui/dialogs";

    export default {
        data() {
            return {
                processing: false,
                user: {
                    username: "",
                    password: ""
                }
            };
        },
        methods: {
            submit() {
                if (!this.user.username || !this.user.password) {
                    this.alert(
                        "Please provide both an email address and password."
                    );
                    return;
                }

                this.processing = true;
                this.login();
            },

            login() {
                this.$backendService
                    .login(this.user)
                    .then(response => {
                        console.log(response);
                        console.log(response.statusCode);
                        if (response.statusCode !== 200) {
                            throw new Error(response.statusCode);
                        }
                        this.processing = false;
                        this.$navigateTo(Home, {
                            clearHistory: true
                        });
                    })
                    .catch(() => {
                        this.processing = false;
                        this.alert(
                            "Unfortunately we could not find your account."
                        );
                    });
            },
            focusPassword() {
                this.$refs.password.nativeView.focus();
            },
            alert(message) {
                return dialogs.alert({
                    title: "Petstacy",
                    okButtonText: "OK",
                    message: message
                });
            }
        }
    };
</script>

<style scoped>
    .logo-img{
        height: 140px;
        margin-top:200px;
        margin-bottom:200px;
        vertical-align: top;
    }

    .page {
        align-items: center;
        flex-direction: column;
    }

    .form {
        margin-left: 30;
        margin-right: 30;
        flex-grow: 2;
        vertical-align: middle;
    }

    .logo {
        margin-bottom: 12;
        height: 90;
        font-weight: bold;
    }

    .header {
        horizontal-align: center;
        font-size: 25;
        font-weight: 600;
        margin-bottom: 70;
        text-align: center;
        color: #D51A1A;
    }

    .input-field {
        margin-bottom: 25;
    }

    .input {
        font-size: 18;
        placeholder-color: #A8A8A8;
    }

    .input:disabled {
        background-color: white;
        opacity: 0.5;
    }

    .btn-primary {
        margin: 30 5 15 5;
    }

    .login-label {
        horizontal-align: center;
        color: #A8A8A8;
        font-size: 16;
    }

    .sign-up-label {
        margin-bottom: 20;
    }

    .bold {
        color: #000000;
    }
</style>