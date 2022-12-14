<template>
    <main>
        <h1>Mi Curriculum</h1>
        <CurriculumComponent/>
    </main>
</template>

<script>

import CurriculumComponent from '@/components/CurriculumComponent.vue';

export default{
    name: 'CurriculumView',
    components: {
        CurriculumComponent
    }
}
</script>