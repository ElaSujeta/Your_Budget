import { NotFound } from './layouts/NotFound';
import { Podsumowanie } from './layouts/Podsumowanie';
import { Przychody } from './layouts/Przychody';
import { Wydatki } from './layouts/Wydatki';
import { Budgety } from './layouts/Budżety';
import { Wykresy } from './layouts/Wykresy';


export default [ {
    title: 'Podsumowanie',
    path: '/podsumowanie',
    component: Podsumowanie,
}, {
    title: 'Przychody',
    path: '/przychody',
    component: Przychody,
}, {
    title: 'Wydatki',
    path: '/wydatki',
    component: Wydatki,
}, {
    title: 'Budżety',
    path: '/budżety',
    component: Budgety,
}, {
        title: 'Wykresy',
        path: '/wykresy',
        component: Wykresy,
}, {
    component: NotFound,
}];
