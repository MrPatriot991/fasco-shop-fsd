interface WishlistListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  className?: string;
}

export const WishlistList = <T,>({ items, renderItem, className }: WishlistListProps<T>) => {
  return (
    <div className={className}>
      <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2 mg:grid-cols-3 lg:grid-cols-4 lg:gap-6">
        {items.map((item, idx) => (
          <li key={idx}>{renderItem(item)}</li>
        ))}
      </ul>
    </div>
  );
};
