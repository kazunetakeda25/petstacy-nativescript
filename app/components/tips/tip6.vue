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
                <Label textWrap="true" class="p-10" text="Go to VIP Barking Day photo booth and take a photo using the photo booth facilities."></Label>
                <Label textWrap="true" class="p-10" text="Upload the photo to your pet’s social media account with captions below:"></Label>
                <Label textWrap="true" class="p-10" text="#VIPBarkingDay – It’s so “Barking Fun”!"></Label>
                <Label textWrap="true" class="p-10" text="#PetCelebHunt #PetCelebTerritory #VeryImportantPetMagazine"></Label>

                <Button text="Back" @tap="back" class="btn btn-petstacy" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Home from "../Home";
    
    export default {
        data() {
            return {
                message: "Challenge #6:"
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