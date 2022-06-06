

export interface IFooterLinks {
    [key: string]: {
        label: string,
        href: string
    }
}

export default {
    WEB_NAME: "Prometheus",
    COPYRIGHT: '© Prometheus Research Inc., 2022',
    FOOTER_LINKS: <IFooterLinks>{
        ["twitter"]: {
            label: "Twitter",
            href: 'https://twitter.com/prometheusprj'
        },
        ["github"]: {
            label: "Github",
            href: 'https://github.com/Prometheus-Research-Inc'
        },
        ["discord"]: {
            label: "Discord",
            href: 'https://discord.gg/wwbkhJTZwy'
        }
    }
}