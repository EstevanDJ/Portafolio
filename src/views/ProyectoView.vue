<template>
    <main>
        <div>
            
            <ProyectoComponent/>
        </div>
    </main>
</template>

<script>

import ProyectoComponent from '@/components/ProyectoComponent.vue';

export default{
    name: 'ProyectoView',
    components:{
        ProyectoComponent
    }
}
</script>