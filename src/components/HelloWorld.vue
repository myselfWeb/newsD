<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <h2>Essential Links</h2>
        <ul>
            <li>
                <a
                    href="https://vuejs.org"
                    target="_blank"
                >
                    Core Docs
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'HelloWorld',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
    h1, h2 {
        font-weight: normal;
    }

    a {
        color: #42b983;
    }

    ul
        list-style-type none
        padding 0
        li
            display inline-block
            margin 0 10px
            font-size 48px
</style>
