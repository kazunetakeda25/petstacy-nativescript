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
                <Label textWrap="true" class="p-10" text="Find this vendor"></Label>
                <Image col="2" row="0" horizontalAlignment="center" class="status-img" src="~/assets/images/tip_5.jpg" />

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
                message: "Challenge #5:"
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