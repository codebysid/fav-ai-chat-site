import Link from "./ui/Link"

interface IFooterNavigationCards {
    link: string,
    title: string
}

const FooterNavigationLink = ({ link, title }: IFooterNavigationCards) => {
    return (
        <Link href={link} target="_blank">
            {title}
        </Link>)
}

export default FooterNavigationLink