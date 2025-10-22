import TextField from "./ui/TextField";
import React, { useEffect, useState } from "react";
import axios from "axios";

interface ProductFormData {
  name: string;
  price: string;
  brand: string;
  description: string;
  max_purchase: string;
  stock_status: string;
  image: string;
}

interface Brand {
  id: number;
  name: string;
}
interface ProductFormProps {
  formData: ProductFormData;
  onChange: (field: string, value: string) => void;
  setFormData: React.Dispatch<React.SetStateAction<ProductFormData>>;
}

const ProductForm: React.FC<ProductFormProps> = ({
  formData,
  onChange,
  setFormData,
}) => {
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [brands, setBrands] = useState<Brand[]>([]);

  //handle Brand Category
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("address api brand");

        setBrands(response.data);
      } catch (error) {
        console.error("Error Fetching categories", error);
      }
    };
    fetchBrands();
  }, []);
  // handle Image uploading
  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImageFile(file);

    const data = new FormData();
    data.append("file", file);
    try {
      const response = await axios.post("adress image api");

      setFormData((prev: ProductFormData) => ({
        ...prev,
        image: response.data.id || response.data.url,
      }));
    } catch (error) {
      console.log("Error uploading image", error);
    }
  };

  //handle form changes

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    onChange(name, value);
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="font-yekan-bakh font-bold w-full max-w-6xl mx-auto 
    text-primary-text-light dark:text-[var(--color-primary-text-dark)]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="md:col-span-2 flex flex-col items-center">
          <div className="w-full max-w-3xl rounded-lg">
            {formData.image && (
              <img
                src={formData.image}
                alt="عکس محصول"
                className="rounded-lg object-cover w-full max-h-96 mb-6"
              />
            )}
          </div>
          <div
            className="w-full h-32 rounded-lg border-2 border-dashed 
            bg-on-primary-light dark:bg-[var(--color-base-text-field-dark)]
            border-input-light dark:border-[var(--color-input-dark)]
            flex justify-center items-center"
          >
            <label
              htmlFor="image-upload-place"
              className="font-normal text-base leading-5 text-center
              text-secondary-light dark:text-[var(--color-secondary-dark)]
              cursor-pointer"
            >
              آپلود عکس
            </label>
            <input
              type="file"
              id="image-upload-place"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </div>
        </div>
        <div className="md:col-span-2">
          <TextField
            type="text"
            inputLabel="نام"
            inputValue={formData.name}
            inputName="name"
            placeholder="نام محصول را وارد نمایید"
            onChangeInput={handleChange}
          />
        </div>
        <TextField
          type="text"
          inputLabel="قیمت"
          inputValue={formData.price}
          inputName="price"
          placeholder="قیمت محصول را وارد نمایید"
          onChangeInput={handleChange}
        />

        {/* <TextField
          type="text"
          inputLabel="برند"
          inputValue={formData.brand}
          inputName="brand"
          placeholder="برند محصول را وارد نمایید"
          onChangeInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange("brand", e.target.value)
          }
        /> */}
        <div className="flex flex-col items-start gap-2 w-full max-h-20">
          <label
            className="font-yekan-bakh font-normal text-base leading-6 text-primary-text-light 
        dark:text-[var(--color-on-primary-light)]"
            htmlFor="brand"
          >
            برند
          </label>
          <select
            name="brand"
            id="brand"
            value={formData.brand}
            onChange={handleChange}
            className="font-sans font-normal flex items-center justify-start px-2 py-2.5 
        w-full max-h-11 text-primary-text-light bg-on-primary-light border border-input-light 
        rounded-lg placeholder-secondary-light placeholder:font-yekan-bakh outline-none disabled:bg-input-light 
        focus:border-input-active dark:disabled:bg-[var(--color-input-dark)] dark:text-[var(--color-on-primary-light)] 
        dark:placeholder-[var(--color-secondary-dark)] dark:bg-[var(--color-base-text-field-dark)] 
        dark:border-[var(--color-input-dark)]"
          >
            <option value="">برند محصول را انتخاب کنید</option>
            {brands.map((brand) => (
              <option key={brand.id} value={brand.id}>
                {brand.name}
              </option>
            ))}
          </select>
        </div>

        <div className="md:col-span-2 flex flex-col gap-2">
          <label
            className="font-normal text-base
            text-primary-text-light dark:text-[var(--color-on-primary-light)]"
          >
            توضیحات
          </label>
          <textarea
            name="description"
            id="description"
            rows={4}
            value={formData.description}
            onChange={handleChange}
            placeholder="توضیحات محصول را وارد نمایید"
            className="w-full resize-none font-normal text-base
            text-primary-text-light pt-2.5 pr-2 
            bg-on-primary-light border border-input-light
            rounded-lg placeholder-secondary-light outline-none
            focus:border-input-active dark:text-[var(--color-on-primary-light)] dark:placeholder-[var(--color-secondary-dark)]
            dark:bg-[var(--color-base-text-field-dark)] dark:border-[var(--color-input-dark)]"
          />
        </div>
        <TextField
          type="text"
          inputLabel="تعداد قابل خرید"
          inputValue={formData.max_purchase}
          inputName="max_purchase"
          placeholder="تعداد قابل خرید را وارد نمایید"
          onChangeInput={handleChange}
        />
        <div className="font-yekan-bakh flex flex-col items-start gap-2 w-full">
          <label
            className="font-normal text-base leading-6
            text-primary-text-light dark:text-[var(--color-on-primary-light)]"
          >
            موجودی
          </label>
          <select
            name="stock_status"
            value={formData.stock_status}
            onChange={handleChange}
            className="font-normal px-2 py-2.5 w-full
            text-primary-text-light bg-on-primary-light
            border border-input-light rounded-lg
            placeholder-secondary-light outline-none
            focus:border-input-active dark:text-[var(--color-on-primary-light)] dark:bg-[var(--color-base-text-field-dark)]
            dark:border-[var(--color-input-dark)]"
          >
            <option value="in_stock">موجود</option>
            <option value="out_of_stock">ناموجود</option>
          </select>
        </div>
      </div>
    </form>
  );
};

export default ProductForm;
