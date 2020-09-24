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
            <GridLayout rows="auto,auto,*,auto,auto,auto">
                <Image col="1" row="0" horizontalAlignment="center" class="logo-img" src="~/assets/images/top_home.png" />
                <Label row="1" class="body m-20 home_label" horizontalAlignment="center" :text="message" textWrap="true"></Label>
                <ListView style="height:350;" row="2" for="(item,index) in tips" class="list-group" @itemTap="onItemTap">
                    <v-template>
                        <GridLayout class="list-group-item" rows="*" columns="auto, auto">
                            <Label row="0" col="0" :text="item.text" />
                            <Image row="0" col="1" src="~/assets/images/icon_arrow_right.png" style="margin:0 0 0 10" v-if="checkTips(index)" />
                        </GridLayout>
                    </v-template>
                </ListView>
                <Button row="3" @tap="onScan" text="SCAN QR CODE (CLUE)" class="btn btn-petstacy" />
                <Button row="4" @tap="logout" text="LOGOUT" class="btn btn-petstacy" />
            </GridLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import localStorage from "nativescript-localstorage";
    import Login from "./Login";
    import Tip1 from "./tips/tip1";
    import Tip2 from "./tips/tip2";
    import Tip3 from "./tips/tip3";
    import Tip4 from "./tips/tip4";
    import Tip5 from "./tips/tip5";
    import Tip6 from "./tips/tip6";
    import * as dialogs from "tns-core-modules/ui/dialogs";
    import { BarcodeScanner } from "nativescript-barcodescanner";
    require( "nativescript-localstorage" );
    let barcodescanner = new BarcodeScanner();
    export default {
        data() {
            return {
                message: "PET CELEB HUNT",
                tips_scanned:[],
                tips:[
                    {text:'Challenge #1'},
                    {text:'Challenge #2'},
                    {text:'Challenge #3'},
                    {text:'Challenge #4'},
                    {text:'Challenge #5'},
                    {text:'Challenge #6'},
                ]
            };
        },
        mounted(){
            let storageStr = localStorage.getItem('ns-persistent');
            if (storageStr){
                this.tips_scanned = JSON.parse(storageStr);
            }
            
           /*localStorage.setItem('ns-persistent',JSON.stringify("BARKINGDAY01"));
           this.tips_scanned = localStorage.getItem('ns-persistent')*/
        },
        methods: {
            checkTips(index){
                if(this.tips_scanned.indexOf(String(index+1)) !== -1) {
                    return true;
                } else {
                    return false;
                }
            },
            onItemTap: function(event) {
                let tapped = event.index + 1;
                if(this.tips_scanned.indexOf(String(tapped)) !== -1) {
                    switch(tapped){
                        case 1:{
                            this.$navigateTo(Tip1, {
                                clearHistory: true
                            });
                            break;
                        }
                        case 2:{
                            this.$navigateTo(Tip2, {
                                clearHistory: true
                            });
                            break;
                        }
                        case 3:{
                            this.$navigateTo(Tip3, {
                                clearHistory: true
                            });
                            break;
                        }
                        case 4:{
                            this.$navigateTo(Tip4, {
                                clearHistory: true
                            });
                            break;
                        }
                        case 5:{
                            this.$navigateTo(Tip5, {
                                clearHistory: true
                            });
                            break;
                        }
                        case 6:{
                            this.$navigateTo(Tip6, {
                                clearHistory: true
                            });
                            break;
                        }
                    }
                    
                } else {
                    this.alert('Tip not yet found');
                }
            },
            onScan(){
                barcodescanner.scan({
                    formats: "QR_CODE",
                    cancelLabel: "EXIT. Also, try the volume buttons!", // iOS only, default 'Close'
                    cancelLabelBackgroundColor: "#333333", // iOS only, default '#000000' (black)
                    message: "Use the volume buttons for extra light", // Android only, default is 'Place a barcode inside the viewfinder rectangle to scan it.'
                    beepOnScan: true,             // Play or Suppress beep on scan (default true)
                    torchOn: false,               // launch with the flashlight on (default false)
                    /* closeCallback: () => { console.log("Scanner closed")}, */ // invoked when the scanner was closed (success or abort)
                    resultDisplayDuration: 500,   // Android only, default 1500 (ms), set to 0 to disable echoing the scanned text
                    openSettingsIfPermissionWasPreviouslyDenied: true // On iOS you can send the user to the settings app if access was previously denied
                }).then((result) => {
                        switch(result.text) { 
                            case "BARKINGDAY01": { 
                                this.addToStorage("1");
                                this.$navigateTo(Tip1, {
                                    clearHistory: true
                                });
                                break; 
                            }
                            case "BARKINGDAY02": { 
                                this.addToStorage("2");
                                this.$navigateTo(Tip2, {
                                    clearHistory: true
                                });
                                break; 
                            }
                            case "BARKINGDAY03": { 
                                this.addToStorage("3");
                                this.$navigateTo(Tip3, {
                                    clearHistory: true
                                });
                                break; 
                            }
                            case "BARKINGDAY04": { 
                                this.addToStorage("4");
                                this.$navigateTo(Tip4, {
                                    clearHistory: true
                                });
                                break; 
                            }
                            case "BARKINGDAY05": { 
                                this.addToStorage("5");
                                this.$navigateTo(Tip5, {
                                    clearHistory: true
                                });
                                break; 
                            }
                            case "BARKINGDAY06": { 
                                this.addToStorage("6");
                                this.$navigateTo(Tip6, {
                                    clearHistory: true
                                });
                                break; 
                            }
                            default: { 
                                this.alert(
                                    "No tip was scanned"
                                );
                                break; 
                            } 
                        } 
                }, (errorMessage) => {
                    console.log("No scan. " + errorMessage);
                });
            },
            addToStorage(new_tip){
                if(this.tips_scanned.indexOf(new_tip) == -1) {
                    this.tips_scanned.push(new_tip);
                    localStorage.setItem('ns-persistent',JSON.stringify(this.tips_scanned));
                }
            },
            logout() {
                this.$navigateTo(Login, {
                    clearHistory: true
                });
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

<style>
    ActionBar {
        background-color: #f9423a;
        color: #fff;
    }
    .btn-petstacy {
        background-color: #f9423a;
        color: #fff;
        border:1px solid #f9423a;
        border-radius:10px;
    }
    .action-label,.home_label {
        font-size: 24;
        font-family:'OpenSans-Regular';
        font-weight: bold;
        vertical-align: center;
    }
    
</style>