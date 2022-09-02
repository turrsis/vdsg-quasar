<template>
    <q-page class="flex flex-center" v-designer.true>
        <div>
            <div>
                <q-btn color="white" text-color="black" label="Standarde" to="/about" :round="false"/>
            </div>
        </div>
        <q-img src="~assets/quasar-logo-vertical.svg" spinner-color="blue" width="200px" height="200px"/>
    </q-page>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'PageIndex'
});
</script>
