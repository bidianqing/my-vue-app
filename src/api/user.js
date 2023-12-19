import httpClient from '@/utils/request'

export async function getUsers(){
    return await httpClient({
        method: 'get',
        url: '/users',
    })
}