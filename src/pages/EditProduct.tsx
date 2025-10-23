import { useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import SidebarDropdown from "../components/ui/SidebarDropdown";
import ProductForm from "../components/ProductForm";
import ButtonPrimary from "../components/ui/ButtonPrimary";

const EditProduct = () => {
  const [formData, setFormData] = useState({
    name: "",
    price: "",
    brand: "",
    description: "",
    max_purchase: "",
    stock_status: "in_stock",
  });

  const [image, setImage] = useState<string | null>(null);

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, image });
  };

  return (
    <div
      className="flex items-start justify-center gap-16 py-16 min-h-screen
      bg-background-base-light dark:bg-[var(--color-background-primary-dark)]"
    >
      <Sidebar>
        <SidebarDropdown />
      </Sidebar>
      <main className="w-full max-w-4xl">
        <ProductForm
          formData={formData}
          image={image}
          onChange={handleChange}
          onImageChange={handleImageChange}
          onSubmit={handleSubmit}
        />
        <div className="md:col-span-2 flex gap-6 justify-center md:justify-start pt-8">
          <ButtonPrimary
            text="بروزرسانی محصول"
            bgColor="bg-success-light"
            bgHoverColor=""
            handleClick={() => {}}
          />
          <ButtonPrimary
            text="حذف محصول"
            bgColor="bg-error-light"
            bgHoverColor=""
            handleClick={() => {}}
          />
        </div>
      </main>
    </div>
  );
};

export default EditProduct;
