import Model from '@/model/Model';

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue;


}

declare module 'vue/types/vue' {

    /*
    Vue.프로퍼티 처럼 접근하고자 할때 .
     */
    interface VueConstructor {
        $http;
    }
    /*
    this.프로퍼티 처럼 접근하고자 할때
     */
    interface Vue {

    }
}

