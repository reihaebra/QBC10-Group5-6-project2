import ProductForm from '../components/ProductForm';

const ProductPage = () => {
  return (
    <div className="min-h-screen bg-(--color-background-base-light) flex items-center justify-center p-8 dark:bg-(--color-background-primary-dark)">
      <ProductForm />
    </div>
  );
};

export default ProductPage;
