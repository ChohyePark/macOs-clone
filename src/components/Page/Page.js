import LoadingWindow from "../LoadingWindow/LoadingWindow";


export default function Page({ children }) {
  return (
    <div className="page">
      <LoadingWindow></LoadingWindow>
    </div>
  );
}