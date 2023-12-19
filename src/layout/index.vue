<template>
    <div>
        <el-container>
            <el-aside>
                <el-menu
                    background-color="#545c64"
                    router
                    text-color="#fff">
                    <el-menu-item index="/">Hello</el-menu-item>
                    <el-menu-item index="/news">News</el-menu-item>
                    <el-menu-item index="/about">About</el-menu-item>
                </el-menu>
            </el-aside>
            <el-container>
                <el-header>
                    <el-radio-group style="margin-bottom: 20px">
                        <el-radio-button :label="false">expand</el-radio-button>
                        <el-radio-button :label="true">collapse</el-radio-button>
                    </el-radio-group>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
