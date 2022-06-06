
export interface IRoutes {
    [key: string]: {
        label: string,
        internal: boolean,
    }
}

export default <IRoutes>{
    ['/']: {
        label: 'The Fire Rises',
        internal: true
    },
    ['/consultacy']: {
        label: 'Apprenticeship Consultancy',
        internal: true
    },
    ['/resources']: {
        label: 'External Resources',
        internal: true
    },
    ['/funding']: {
        label: 'Support Prometheus',
        internal: true
    }
}