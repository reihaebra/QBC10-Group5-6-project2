interface SidebarLinksProps {
  activeSection: string;
  onSelect: (section: string) => void;
}

const SidebarLinks: React.FC<SidebarLinksProps> = ({
  activeSection,
  onSelect,
}) => {
  const links = [
    { id: "add", label: "ثبت نظر" },
    { id: "view", label: "مشاهده نظرات" },
    { id: "related", label: "محصولات مرتبط" },
  ];

  return (
    <div className="font-yekan-bakh flex flex-col items-start gap-5">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => onSelect(link.id)}
          className={`text-base transition-all duration-200 focus:outline-none cursor-pointer text-primary-text-light dark:text-[var(--color-on-primary-light)] ${
            activeSection === link.id ? "font-bold" : "font-normal"
          }`}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default SidebarLinks;
