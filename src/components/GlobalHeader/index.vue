<template>
    <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <!-- Navbar content -->
        <a href="#" class="navbar-brand">者也专栏</a>
        <div v-if="!props.user?.isLogin" class="list-inline mb-0">
            <router-link to="/login">
                <div class="list-inline-item btn btn-outline-light">登录</div>
            </router-link>
            <router-link to="/login">
                <div class="list-inline-item btn btn-outline-light">注册</div>
            </router-link>
        </div>

        <div v-else>
            <drop-down :title="'你好，' + user?.name ">
                <drop-down-item>
                    <div>个人中心</div>
                </drop-down-item>
                <drop-down-item :disabled="true">
                    <div>退出</div>
                </drop-down-item>
            </drop-down>
            <!-- <div class="list-inline-item btn btn-outline-light">你好， {{ user?.name }}</div> -->
        </div>
    </nav>
</template>
<script lang="ts" setup>
import DropDown from '@/components/DropDown/index.vue'
import DropDownItem from '@/components/DropDown/DropDownItem.vue'

import UserType from '@/types/UserType'

const props = defineProps<{
 user: UserType
}>()

</script>

<style lang="scss" scoped>
.global-header-com-wrap {
    height: 80px;
    width: 100%;
    background-color: rgb(231, 249, 218);
}
</style>
