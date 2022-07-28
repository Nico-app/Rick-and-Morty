import { PaginationInfo } from "../LandingPage";
import "./style.css";

type PaginationProps = {
  info: PaginationInfo;
  currentPage: number;
  onChange: (url: string) => void;
};

const Pagination = ({ info, currentPage, onChange }: PaginationProps) => {
  const pageHandler = async (scenario: "prev" | "next") => {
    onChange(info[scenario]!);
  };

  return (
    <div className="pagination">
      {currentPage > 1 && (
        <div
          className="pagination-item pagination-btn"
          onClick={() => pageHandler("prev")}
        >
          previous
        </div>
      )}
      <div className="pagination-item pagination-current">{currentPage}</div>
      <div
        className="pagination-item pagination-btn"
        onClick={() => pageHandler("next")}
      >
        next
      </div>
    </div>
  );
};

export default Pagination;
