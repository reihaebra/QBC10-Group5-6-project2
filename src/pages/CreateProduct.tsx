import { useState } from "react";
import Sidebar from "../components/ui/Sidebar";
import AdminDropdown from "../components/ui/AdminDropdown";
import ProductForm from "../components/ProductForm";

const CreateProduct = () => {
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
      <aside>
        <Sidebar>
          <AdminDropdown />
        </Sidebar>
      </aside>
      <main className="w-full max-w-4xl">
        <ProductForm
          formData={formData}
          image={image}
          onChange={handleChange}
          onImageChange={handleImageChange}
          onSubmit={handleSubmit}
        />
      </main>
    </div>
  );
};

export default CreateProduct;
