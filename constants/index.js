import { HeartIcon, HomeIcon, MagnifyingGlassIcon, PersonIcon, PlusIcon } from "@radix-ui/react-icons";
import {BiImageAdd} from 'react-icons/bi';
import {FiUsers} from 'react-icons/fi';
import {AiOutlineUser} from 'react-icons/ai';
export const sidebarLinks = [
    {
        Icon: '/assets/home.svg',
        route: '/',
        label: 'Home'
    },
    {
        Icon: '/assets/search.svg',
        route: '/search',
        label: 'Search'
    },
    {
        Icon: '/assets/heart.svg',
        route: '/activity',
        label: 'Activity'
    },
    {
        Icon: '/assets/create.svg',
        route: '/create-thread',
        label: 'Create Thread'
    },
    {
        Icon: '/assets/community.svg',
        route: '/communities',
        label: 'Communities'
    },
    {
        Icon: '/assets/user.svg',
        route: '/profile',
        label: 'Profile'
    },

]


export const profileTabs = [
    {
        value: 'threads',
        label: 'Threads',
        icon: '/assets/reply.svg',
    },
    {
        value: 'replies',
        label: 'Replies',
        icon: '/assets/members.svg',
    },
    {
        value: 'tagged',
        label: 'Tagged',
        icon: '/assets/tag.svg',
    },
]


export const communityTabs = [
    {
        value: 'threads',
        label: 'Threads',
        icon: '/assets/reply.svg',
    },
    {
        value: 'replies',
        label: 'Replies',
        icon: '/assets/members.svg',
    },
    {
        value: 'requests',
        label: 'Requests',
        icon: '/assets/request.svg',
    },
]