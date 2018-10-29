<template>

    <el-container id="app" class="background">

        <el-container id="main">

            <el-menu
                    :default-active="activeIndex"
                    class="el-menu-demo"
                    mode="horizontal"
                    @select="signUp"
                    background-color="#545c64"
                    text-color="#fff"
                    active-text-color="#ffd04b">
                <el-menu-item index="1">
                    <el-select v-model="value" @change="selectItem" placeholder="Select">
                        <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.name"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </el-menu-item>
                <el-menu-item index="signUp">
                    sign up
                </el-menu-item>

            </el-menu>
            <!--header-->
            <el-header class="header" height="20%">
                <div>sal<span>2 & 2</span>vent</div>
                <h4>할인의 모든 것</h4>
            </el-header>
            <div class="clear"></div>

            <router-view/>
        </el-container>


    </el-container>
</template>
<script lang="ts">
    import {Component, Vue} from 'vue-property-decorator';

    @Component({})
    export default class App extends Vue {
        private activeIndex: string = '1';
        private activeIndex2: string = '1';

        private options: any[] = [
            {name: 'Others Feed', value: "othersfeed"},
            {name: 'My Feed', value: "myfeed"},
            {name: 'Need Feed !! & Free Board', value: "needfeed"},

        ];

        public activePage: string = "othersfeed";


        selectItem(key) {
            console.log(key);
            this.$router.replace("/" + key);
        }

        signUp(key) {
            console.log(key)
            this.$router.replace("/" + key);
        }
    }

</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
    }
    #main {
        margin-left: 10%;
        margin-right: 10%;
    }

    .background {
        background: aliceblue;
    }


    .el-menu-demo {
        border-top-left-radius: 10%;
        border-top-right-radius: 40%;
    }
    .el-container > .el-container {
        height: 1024px;
        margin-left: 5%;
        margin-right: 5%;
        position: relative;
    }
    .header {

        background-color: #abdbdf;
        color: #555;
        text-align: center;
        line-height: 60px;
        margin-bottom: 10%;

        border-bottom-left-radius: 40%;

        border-top-right-radius-radius: 10%;
    }
    .header span {
        display: inline-block;
        color: #1410ff;
        font-weight: bold;
        font-size: 36px;
        border: 10px double #f921ff;
        padding: 20px;
        margin: 10px;
    }

    .header div {
        font-weight: bold;

        font-size: 32px;

    }

    .header h4 {
        margin: 0;
        font-weight: bold;
        font-size: 16px;

    }

</style>
