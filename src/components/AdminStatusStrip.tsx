interface Props {
  isPaid: boolean;
  isDelivered: boolean;
}

const AdminStatusStrip: React.FC<Props> = ({ isPaid, isDelivered }) => (
  <div className="w-full h-12 rounded-lg border-2 border-input-light py-3 px-4 bg-card-light dark:bg-[var(--color-shop-card-dark)] dark:border-[var(--color-input-dark)]">
    <span className="font-bold text-lg">
      پرداخت:{" "}
      <span className={isPaid ? "text-green-600" : "text-red-600"}>
        {isPaid ? "✓" : "✗"}
      </span>{" "}
      | ارسال:{" "}
      <span className={isDelivered ? "text-green-600" : "text-red-600"}>
        {isDelivered ? "✓" : "✗"}
      </span>
    </span>
  </div>
);

export default AdminStatusStrip;
