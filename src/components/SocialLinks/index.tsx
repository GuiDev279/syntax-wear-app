import IconWhatsapp from "../../assets/images/icon-whatsapp.png"
import IconInstagram from "../../assets/images/icon-instagram.png"
import IconFacebook from "../../assets/images/icon-facebook.png"
import IconTiktok from "../../assets/images/icon-tiktok.png"

const socialLinks = [
    {
        href: "#",
        icon: IconWhatsapp,
        name: "Ícone do WhatsApp"
    },
    {
        href: "#",
        icon: IconInstagram,
        name: "Ícone do Instagram"
    },
    {
        href: "#",
        icon: IconFacebook,
        name: "Ícone do Facebook"
    },
    {
        href: "#",
        icon: IconTiktok,
        name: "Ícone do TikTok"
    }
]


export const SocialLinks = () => {
    return (
        <div>
            <p className="mb-4 text-xl font-medium text-surface-alt">Redes Sociais</p>
            <ul className="flex gap-2 mt-2">
                {socialLinks.map(({ href, icon, name }) => (
                    <li key={name}>
                        <a href={href}
                            aria-label={name}
                            target="_blank">
                            <img src={icon} alt={name} />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}