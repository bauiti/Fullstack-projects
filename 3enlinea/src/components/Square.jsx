export const Square = ({ children, isSelected, updateBoard, index }) => {

  const handleClick = () => {
    updateBoard(index); // Pasar el índice al hacer clic
  };

  const className = `square ${isSelected ? "is-selected" : ""}`;
  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};