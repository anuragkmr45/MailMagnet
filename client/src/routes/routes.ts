import { lazy } from 'react';

const Main = lazy(() => import('../pages/Main'));
const Emails = lazy(() => import('../components/emails'))
const ViewEmails = lazy(() => import('../components/viewEmails'))

const routes = {
    main: {
        path: '/',
        element: Main
    },
    invalid: {
        path: '/*',
        element: Emails
    },
    emails: {
        path: '/emails',
        element: Emails
    },
    view: {
        path: '/view',
        element: ViewEmails
    }
}

export { routes };
