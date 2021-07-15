<template>
    <div @click="filterSelect(filter)" :class="filter + ' filter-item'" :style="`background-image:url(${uploadImage})`">
        <slot id="filter-text"></slot>        
    </div>
</template>
<script>
export default {
    name : 'filterbox',
    methods : {
        filterSelect(item){
            this.emitter.emit('filter', item)
        }
    },
    props : {
        uploadImage : String,
        filter : String
    }
}
</script>
<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    align-items: center;    
    display: inline-block;          
    color: white;
    background-size: cover;
    background-position: center;
}
</style>
