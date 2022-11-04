import axios from 'axios'

export const GoogleApi = (token : string | null | undefined) => axios.create({
    baseURL : 'https://www.googleapis.com/',
    headers : {
        'authorization' : token ?? ''
    }
})

export const PatreonApi = (token  : string | null | undefined) => axios.create({
    baseURL : 'https://www.patreon.com/api/',
    headers : {
        'authorization' : token ?? ''
    }
})

export const DiscordApi = (token : string | null | undefined) => axios.create({
    baseURL : 'https://discord.com/api/',
    headers : {
        'authorization' : token ?? ''
    }
})