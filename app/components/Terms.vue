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
                <Label textWrap="true" class="p-10" text="TERMS & CONDITIONS"></Label>
                <Label textWrap="true" class="p-10" text="1. Pet Celeb Hunt begins at 3.00pm and ends by 4.00pm"></Label>
                <Label textWrap="true" class="p-10" text="2. Participants who completed all required steps within the shortest time wins."></Label>
                <Label textWrap="true" class="p-10" text="3. Owners are fully responsible of your dog’s behaviour at all time."></Label>
                <Label textWrap="true" class="p-10" text="4. Do not bring your female dog if she is “on-heat”/having period."></Label>
                <Label textWrap="true" class="p-10" text="5. Make sure you pick up after your dog’s and keep the premises clean."></Label>
                <Label textWrap="true" class="p-10" text="6. You may be charge for cleaning and obligated to compensate the premise owner for any damages caused."></Label>
                <Label textWrap="true" class="p-10" text="7. Please be considerate to other visitors within Jaya One compound."></Label>
                <Label textWrap="true" class="p-10" text="8. Do not run recklessly during game time, remember safety comes first."></Label>
                <Label textWrap="true" class="p-10" text="9. All participations shall be by voluntary. We will not be liable for any misconducts or losses during the event."></Label>
                <Label textWrap="true" class="p-10" text="10. The organisers (Jio Concepts, Pet Celeb Territory & Very Important Pet Magazine) reserve the right to modify, suspend, cancel or terminate or extend or resume the entry period or disqualify any participants or entries at any times without giving advance notice. We will do so if it cannot be guaranteed the competition can be carried out fairly or correctly for technical, legal or other reasons, or if we suspect that any persons have manipulated entries or results, provided false information, or acted unethically."></Label>
                <Label textWrap="true" class="p-10" text="11. Prizes / winners may be awarded in any manners we deem fair and appropriate."></Label>
                <Label textWrap="true" class="p-10" text="12. We shall not be responsible or liable in any manners whatsoever for any deficiencies or inadequacy of service rendered by or through the prizes received by you and for any loss of whatsoever nature suffered by you."></Label>
                <Label textWrap="true" class="p-10" text="13. We will use best efforts to ensure that the event and the prizes and any other offers are provided as described, but the participants shall not make any claims or seek compensation against the organisers, even in the event that the competition and the prizes or the offers are not provided or provided as described."></Label>
                <check-box :checked="terms" @checkedChange="terms = $event.value" text="I acknowledge that I have read and agree to the above Terms and Conditions" />
                <Button @tap="proceed" :isEnabled="terms" text="Proceed" class="btn btn-petstacy" />
            </StackLayout>
        </ScrollView>
    </Page>
</template>

<script>
    import Login from "./Login";
    
    export default {
        data() {
            return {
                terms:false
            };
        },
        methods: {
            proceed() {
                this.$navigateTo(Login, {
                    clearHistory: true
                });
            }
        }
    };
</script>

<style>
</style>