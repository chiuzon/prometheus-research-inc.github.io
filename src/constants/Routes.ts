
export interface IRoutes {
    [key: string]: {
        label: string,

    }
}

export default <IRoutes>{
    ['/']: {
        label: 'The Fire Rises',
    },
    ['/consultacy']: {
        label: 'Apprenticeship Consultancy'
    },
    ['/resources']: {
        label: 'External Resources'
    },
    ['/funding']: {
        label: 'Support Prometheus'
    }
}