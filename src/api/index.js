import httpClient from '@/utils/request'

export async function login(data){
    return await httpClient({
        method: 'post',
        url: '/login',
        data
    })
}

export async function getUsers(){
    return await httpClient({
        method: 'get',
        url: '/users',
    })
}