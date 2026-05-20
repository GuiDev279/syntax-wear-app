
const menus = [
    { title: "Masculino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
    { title: "Feminino", items: ["Casual", "Esporte", "Moderno", "Futurista"] },
    { title: "Outlet", items: ["Masculino", "Feminino"] },
    { title: "Sobre", items: ["Quem Somos", "Missão"] },
];

export const MenuItems = () => {
    return (
        <div className="flex gap-6 flex-col sm:flex-row">
            {menus.map(({ title, items }) => (
                <nav>
                    <ul className="flex flex-col gap-4">
                        <li>
                            <p className="font-normal text-surface-alt text-xl
                                        ">{title}</p>
                        </li>
                        {items.map((item) => (
                            <li key={item} className="font-medium hover:text-[#cccccc] transition-colors cursor-pointer">
                                <a href="#">{item}</a>
                            </li>
                        ))}
                    </ul>
                </nav>
            ))}
        </div>
    )
}