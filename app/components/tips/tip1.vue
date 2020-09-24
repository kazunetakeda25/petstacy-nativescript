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
            <StackLayout>
                <Label class="body m-20" :text="message" textWrap="true"></Label>
                <Label textWrap="true" class="p-10" text="Go to Common Ground and take a Selfie of You and Your Dogs at the location as shown in photo below."></Label>
                <Image col="2" row="0" horizontalAlignment="center" class="status-img" src="~/assets/images/tip_1.jpg" />
                <Label textWrap="true" class="p-10" text="Upload the selfie taken to your pet’s social media account (privacy: public)
                Check in – CommonGround.work (FB) / @commonground.work (Instagram) with captions: " />
                <Label textWrap="true" class="p-10" text="We are now in Malaysia’s First #PetFriendly #CoWorking Space! 
                #PetCelebHunt #PetCelebTerritory #VIPBarkingDay #PetsOfCommonGround" />

                <Button text="Back" class="btn btn-petstacy" @tap="back" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Home from "../Home";
    
    export default {
        data() {
            return {
                message: "Challenge #1:"
            };
        },
        methods: {
            back() {
                this.$navigateTo(Home, {
                    clearHistory: true
                });
            }
        }
    };
</script>

<style>
</style>