import {reactive} from "vue";

export const store = reactive({
    apiUrl: "http://127.0.0.1:8000/api",

    headerLinks:[
        {
            name:'home',
            link:'/'
        },
        {
            name:'projects',
            link:'/projects'
        },
        {
            name:'contacts',
            link:'/contacts'
        },
    ]
})