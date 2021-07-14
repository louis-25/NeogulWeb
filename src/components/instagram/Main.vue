<template>
    <div class="main-app">
    <div class="main-header">
        <ul class="header-button-left">
            <li>Cancel</li>
        </ul>
        <ul class="header-button-right">
            <li>Next</li>
        </ul>
        <img src="../../assets/logo.png" class="main-logo" />
    </div>

    <Container />

    <div class="main-footer">
        <ul class="footer-button-plus">
            <input type="file" id="file" class="inputfile" />
            <label for="file" class="input-plus">+</label>
        </ul>
    </div>
</div>
</template>
<script>
export default {}
</script>
<style>
ul {
    padding: 5px;    
    list-style-type: none;
}
.main-header {
    width: 100%;
    height: 40px;
    background-color: white;
    padding-bottom: 8px;
    position: sticky;    
    display: flex;
    justify-content: space-between;
    top: 0;
}
.header-button-left {
    color: skyblue;    
    width: 50px;
    padding-left: 10px;
    cursor: pointer;
    margin-top: 10px;
}
.header-button-right {    
    color: skyblue;    
    width: 50px;
    cursor: pointer;
    padding-left: 0;
    margin-top: 10px;
}
.main-logo {
    width: 22px;
    margin: auto;
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    top: 13px;
}
.main-footer {
    width: 100%;
    position: sticky;
    bottom: 0;
    padding-bottom: 10px;
    background-color: white;
}
.footer-button-plus {
    width: 80px;
    margin: auto;
    padding-left: 5px;
    text-align: center;
    cursor: pointer;    
    font-size: 24px;
    padding-top: 12px;
}
.sample-box {
    width: 100%;
    height: 600px;
    background-color: bisque;
}
.inputfile {
    display: none;
}
.input-plus {
    cursor: pointer;    
}
.main-app {
    box-sizing: border-box;
    font-family: 'consolas';
    margin-top: 60px;
    width: 100%;
    max-width: 460px;
    margin: auto;
    position: relative;
    border-right: 1px solid #eee;
    border-left: 1px solid #eee;
}
</style>
