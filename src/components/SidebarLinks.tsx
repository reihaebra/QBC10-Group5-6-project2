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
    <div className="font-yekan-bakh flex flex-col items-start text-right space-y-4 pr-4 mt-5 mr-10">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => onSelect(link.id)}
          className={`text-base transition-all duration-200 focus:outline-none ${
            activeSection === link.id
              ? "font-bold text-[color:var(--color-primary-text-light)] dark:text-[color:var(--color-primary-text-dark)]"
              : "font-normal text-[color:var(--color-secondary-light)] dark:text-[color:var(--color-secondary-dark)]"
          }`}
        >
          {link.label}
        </button>
      ))}
    </div>
  );
};

export default SidebarLinks;
