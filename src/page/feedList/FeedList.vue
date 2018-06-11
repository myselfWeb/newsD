<template>
    <div>
        <div class="index-list-item">
            <div class="news-item one-pic">
                <div class="img">
                    <img src="https://t12.baidu.com/it/u=3339848234,1758381708&fm=173&app=25&f=JPEG?w=218&h=146&s=7542DD09AE33059CB12C6D9A0300B082" data-save="true" class="">
                </div>
                <div class='pic-text'>
                    <div class="title">{{title}}</div>
                    <div class='site'>{{site}}</div>
                    <div>{{$store.state.showLoading}}</div>
                </div>
            </div>
        </div>
        <Loading v-show="showLoading"></Loading>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import http from '@/utils/http';
    import api from '@/utils/api';
    import Loading from '@/components/Loading';
    export default {
        name: "FeedList",
        data() {
            return {
                title: '团结互信 共同发展 听习主席讲“上海精神”',
                site: '央广网'
            }
        },
        computed: mapGetters([
            'showLoading'
        ]),
        mounted() {
            this.fetchData();
        },
        methods: {
            fetchData: async function () {
                const res = await http.get(api.right, {})
                if (res.data.success) {
                    console.log('请求成功');
                }
            }
        },
        components: {
            Loading
        }
    }
</script>

<style scoped lang="stylus">
    .index-list-item
        .one-pic
            .img
                font-size 0
                vertical-align middle
                width 100px
                height 67px
                text-align center
                overflow hidden
                float left
                margin-left 0
                background-color #F4F7F9
                position relative
                img
                    width 100%
                    height 100%
            .pic-text
                font-size
</style>