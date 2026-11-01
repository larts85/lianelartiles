import { useOutletContext } from "react-router";

export function usePortfolioContext() {
  return useOutletContext<any>();
}
