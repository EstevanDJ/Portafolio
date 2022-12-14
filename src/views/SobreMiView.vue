<template>
    <main>
        <h1>Sobre Mi</h1>
        <SobreMiComponent/>
    </main>
</template>

<script>

import SobreMiComponent from '@/components/SobreMiComponent.vue';

export default{
    name: 'SobreMiView',
    components: {
        SobreMiComponent
    }
}
</script>